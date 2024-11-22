<script lang="ts">
    import { Card } from "flowbite-svelte";

    export let href: string;
</script>

<Card href={href}>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <slot name="header" />
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
        <slot name="content" />
    </p>
</Card>