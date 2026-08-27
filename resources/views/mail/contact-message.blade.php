<x-mail::message>
# New message from {{ $senderName }}

**From:** {{ $senderEmail }}

{{ $body }}

<x-mail::button :url="'mailto:' . $senderEmail">
Reply to {{ $senderName }}
</x-mail::button>
</x-mail::message>