<script lang="ts">
    import { type User, DinoBoy, OpenAI } from '$lib/stores/constants'
    import { Avatar } from 'flowbite-svelte';
    // import { Avatar } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';

    let elemChat: HTMLElement;
    let messageFeed: any[] = [];

    function scrollChatBottom(behavior?: ScrollBehavior): void {
        elemChat.scrollTo({ top: elemChat.scrollHeight, behavior });
    }

    function addMessage(user: User, message: string, timestamp = new Date()): void {
        const newMessage = {
            id: messageFeed.length,
            host: user.host,
            avatar: user.avatar,
            name: user.name,
            timestamp: timestamp,
            message: message,
            color: user.color
        };
        // Append the new message to the message feed
        messageFeed = [...messageFeed, newMessage];
        // Smoothly scroll to the bottom of the feed
        setTimeout(() => { scrollChatBottom('smooth'); }, 0);
    }

    onMount(() => {
        // Add a test user message
        addMessage(DinoBoy, 'Hello, I am DinoBoy! 🦖');
        // Add a test bot message
        addMessage(OpenAI, 'Hello, I am OpenAI! 🤖');
        // Continue adding test messages
        addMessage(DinoBoy, 'How can you help me today?');
        addMessage(OpenAI, 'I can help you with a variety of tasks, such as answering questions, providing information, and more.');
    });

</script>

<div bind:this={elemChat} class="overflow-y-auto">
    <div class="grid grid-row-[1fr_auto]">
        <!-- Conversation -->
        <section bind:this={elemChat} class="max-h-[500px] p-4 overflow-y-auto space-y-4">
            {#each messageFeed as message}
                {#if message.host === true}
                    <div class="grid grid-cols-[auto_1fr] gap-2">
                        <Avatar src={message.avatar} rounded={true} />
                        <div class="card p-4 variant-soft rounded-tl-none space-y-2">
                            <header class="flex justify-between items-center">
                                <p class="font-bold">{message.name}</p>
                                <small class="opacity-50">{message.timestamp}</small>
                            </header>
                            <p>{message.message}</p>
                        </div>
                    </div>
                {:else}
                    <div class="grid grid-cols-[1fr_auto] gap-2">
                        <div class="card p-4 rounded-tr-none space-y-2 {message.color}">
                            <header class="flex justify-between items-center">
                                <p class="font-bold">{message.name}</p>
                                <small class="opacity-50">{message.timestamp}</small>
                            </header>
                            <p>{message.message}</p>
                        </div>
                        <Avatar src="{message.avatar}" rounded={true} />
                    </div>
                {/if}
            {/each}
        </section>
        <!-- Prompt -->
        <!-- <section class="border-t border-surface-500/30 p-4">
            <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] rounded-container-token">
                <button class="input-group-shim">+</button>
                <textarea
                    bind:value={currentMessage}
                    class="bg-transparent border-0 ring-0"
                    name="prompt"
                    id="prompt"
                    placeholder="Write a message..."
                    rows="1"
                    on:keydown={onPromptKeydown}
                ></textarea>
                <button class={currentMessage ? 'variant-filled-primary' : 'input-group-shim'} on:click={addMessage}>
                    <i class="fa-solid fa-paper-plane"></i>
                </button>
            </div>
        </section> -->
        (record button here)
    </div>
</div>