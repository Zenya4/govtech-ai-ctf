<script lang="ts">
    import NoLinkCard from "$lib/components/NoLinkCard.svelte";

</script>
<svelte:head>
<title>Home</title>
<meta name="description" content="Demo AI Hackathon app" />
</svelte:head>
<section class="flex flex-col justify-center">
    <span id="gm">
        <h1>Progress</h1>
        <div class="flex flex-col items-center mt-20 mb-16 gap-4">
            <NoLinkCard>
                <svelte:fragment slot="header">Streak</svelte:fragment>
                <svelte:fragment slot="content">0 days. Please start a session :D</svelte:fragment>
            </NoLinkCard>
            <NoLinkCard>
                <svelte:fragment slot="header">Improvements</svelte:fragment>
                <svelte:fragment slot="content">0%. Please start a session :D</svelte:fragment>
            </NoLinkCard>
        </div>
    </span>
</section>