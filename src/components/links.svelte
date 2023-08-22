<script>
    export let website;
    export let text = "";
    export let style;

    export let githubLink = 'https://github.com/akr0ss';
</script>

<!-- GITHUB -->
<a class="group flex { website == 'github' ? 'display-block' : 'hidden' }" aria-label="GitHub" href="{ githubLink }">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#8b50a4]">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>

<!-- LINKEDIN -->
<a class="group flex { website == 'linkedin' ? 'display-block' : 'hidden' }" aria-label="LinkedIn" href="https://www.linkedin.com/in/zacharytmerritt/">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#006ba3] ">
        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>

<!-- DISCORD -->
<a class="group flex { website == 'discord' ? 'display-block' : 'hidden' }" aria-label="Discord" href="https://discordapp.com/users/282593436803268618">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#667bc3]">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"/>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>

<!-- EMAIL -->
<a class="group flex { website == 'email' ? 'display-block' : 'hidden' }" aria-label="Email" href="mailto:ZacharyT.Merritt@gmail.com">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="{ style } transition dark:fill-zinc-400 group-hover:fill-[#2d9248]">
        <path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
    </svg>
    <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
    <span class="{ text != "" ? 'ml-4' : 'm-0' }">{ text }</span>
</a>