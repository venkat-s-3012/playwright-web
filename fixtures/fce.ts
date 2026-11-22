// tests/fixtures/fce.ts
import { test as base } from '@playwright/test';
import MailosaurClient, { Message } from 'mailosaur';

const SERVER_ID = process.env.MAILOSAUR_SERVER_ID ?? 'xxideczx';

type WaitOptions = {
  /** Max time (ms) to wait for the email. Default 20s. */
  timeout?: number;
  /** Only match emails with this subject (partial match). */
  subject?: string;
};

export class MailHelper {
  private readonly client: MailosaurClient;
  /** Ignore emails that arrived before this test started (avoids picking up stale OTPs). */
  private readonly testStartedAt = new Date();

  constructor(apiKey: string, readonly serverId: string = SERVER_ID) {
    this.client = new MailosaurClient(apiKey);
  }

  /** Random unique inbox address, e.g. abc123@xxideczx.mailosaur.net */
  generateEmail(): string {
    return this.client.servers.generateEmailAddress(this.serverId);
  }

  /** Wait for the latest email sent to `sentTo` (received after the test started). */
  async waitForMessage(sentTo: string, opts: WaitOptions = {}): Promise<Message> {
    return this.client.messages.get(
      this.serverId,
      { sentTo, subject: opts.subject },
      { timeout: opts.timeout ?? 20_000, receivedAfter: this.testStartedAt },
    );
  }

  /** Wait for an email to `sentTo` and return the OTP / verification code in it. */
  async getOtp(sentTo: string, opts: WaitOptions = {}): Promise<string> {
    const message = await this.waitForMessage(sentTo, opts);

    const code =
      message.text?.codes?.[0]?.value ??
      message.html?.codes?.[0]?.value ??
      message.text?.body?.match(/\b\d{4,8}\b/)?.[0];

    if (!code) throw new Error(`No OTP found in email "${message.subject}" sent to ${sentTo}`);
    return code;
  }

  /** Delete every message in the inbox. */
  async clearInbox(): Promise<void> {
    await this.client.messages.deleteAll(this.serverId);
  }
}

type Fixtures = {
  mail: MailHelper;
};

export const test = base.extend<Fixtures>({
  mail: async ({}, use) => {
    const apiKey = process.env.MAILASOUR_API_KEY;
    if (!apiKey) throw new Error('MAILASOUR_API_KEY is not set in .env');
    await use(new MailHelper(apiKey));
  },
});

export { expect } from '@playwright/test';
