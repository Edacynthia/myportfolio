<?php

namespace App\Http\Controllers;

use App\Mail\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string', 'max:2000'],
        ]);

        Mail::to('edacynthia3@gmail.com')->send(new ContactMessage(
            senderName: $validated['name'],
            senderEmail: $validated['email'],
            body: $validated['message'],
        ));

        return back()->with('success', 'Message sent — I\'ll get back to you soon.');
    }
}
