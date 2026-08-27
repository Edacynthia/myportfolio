<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactMessage extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(
        public string $senderName,
        public string $senderEmail,
        public string $body,
     ) {}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
       return new \Illuminate\Mail\Mailables\Envelope(
            subject: "Portfolio contact from {$this->senderName}",
            replyTo: [$this->senderEmail],
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new \Illuminate\Mail\Mailables\Content(
            markdown: 'mail.contact-message',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
