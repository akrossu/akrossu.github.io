<script>
    export let picture;
    export let title;
    export let description;
    export let repolink;
    export let website;
</script>

<div class="overflow-hidden py-3 lg:py-6 text-white flex justify-center">
    <div class="group relative transition hover:bg-neutral-900 px-6 pb-8 pt-6 lg:h-64 h-64 border border-zinc-700 lg:w-96 lg:min-w-0 min-w-full sm:px-6 rounded-lg">
        <img class="h-12 w-12 object-cover rounded-full mb-4 border border-zinc-700" src="{ picture }" alt="Repository">
        <h1 class="font-mono font-semibold text-2xl">
            { title }
        </h1>
        <p class="mt-2">
            { description }
        </p>
        <a class="group flex mt-6 transition group-hover:text-sky-300" href="{ repolink }">
            <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
            <span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-2 sm:-inset-y-2 sm:rounded-xl"></span>
            <span class="ml-2">
                { website }
            </span>
        </a>
    </div>
</div>