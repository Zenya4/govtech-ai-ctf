<script lang="ts">
    import { onMount } from 'svelte';
    import MainCard from '$lib/components/MainCard.svelte';
    import Doomscroller from '$lib/components/Doomscroller.svelte';
	import DoomscrollCard from '$lib/components/DoomscrollCard.svelte';
    import { Button } from 'flowbite-svelte'

    let doomscrollArticles: { href: string, img: string, header: string, content: string }[] = []
    let doomscrollObservedElement: HTMLElement;

    const addDoomscrollArticle = () => {
        doomscrollArticles = [
            ...doomscrollArticles,
            {
                href: 'https://zenya.dev',
                img: 'https://zenya.dev/img/favicon.png',
                header: 'The dangers of doomscrolling',
                content: 'How to break the cycle of endless scrolling.'
            }
        ]
    }

    onMount(() => {
        for(let i = 0; i < 3; i++) {
            addDoomscrollArticle();
        }
    })
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Demo AI Hackathon app" />
</svelte:head>

<section class="flex flex-col justify-center">
    <span id="gm" class="flex">
        <h1>Good morning, user</h1>
    </span>

    <div id="main-buttons" class="flex flex-col items-center mt-20 mb-16 gap-4">
        <MainCard href="/chat1">
            <svelte:fragment slot="header">Reading Exercises</svelte:fragment>
            <svelte:fragment slot="content">Put your skills to the test.</svelte:fragment>
        </MainCard>
        <MainCard href="/chat2">
            <svelte:fragment slot="header">Therapy Session</svelte:fragment>
            <svelte:fragment slot="content">Engage your personalised AI therapist.</svelte:fragment>
        </MainCard>
        <MainCard href="/progress">
            <svelte:fragment slot="header">My Progress</svelte:fragment>
            <svelte:fragment slot="content">See how far you have come.</svelte:fragment>
        </MainCard>
    </div>

    <span id="article-header" class="flex">
        <h1>Articles for you</h1>
    </span>

    <div id="doomscrolling" class="flex flex-col items-center mt-4 gap-4">
        <Doomscroller observedElement={doomscrollObservedElement} 
        on:intersect={() => {
            addDoomscrollArticle();
        }}>
        </Doomscroller>

        {#each doomscrollArticles as article}
            <DoomscrollCard href={article.href} img={article.img} header={article.header} content={article.content} />
        {/each}

        <div id="doomscroll-observed-element" 
        bind:this={doomscrollObservedElement} 
        class="w-0 h-0">
        </div>
    </div>

    <div id="fab">
        <Button
          color="primary"
          size="lg"
          class="rounded-full shadow-lg hover:shadow-xl fixed inset-x-4 bottom-4 w-full max-w-[90vw] mx-auto"
          href="/chat2">
            <h2>Start your session now</h2>
        </Button>
    </div>
</section>
