<script lang="ts">
    import { Button, Card } from "flowbite-svelte";
    import { ArrowRightOutline } from 'flowbite-svelte-icons';

    export let href: string;
    export let img: string;
    export let header: string;
    export let content: string;
</script>

<div class="space-y-4">
    <Card img={img}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {header}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
            {content}
        </p>
        <Button href={href} class="card-hover">
            Read more <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
    </Card>
</div>