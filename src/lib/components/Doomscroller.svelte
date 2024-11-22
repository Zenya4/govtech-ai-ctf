<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';

    export let observedElement: HTMLElement;

    const dispatch = createEventDispatcher();

    let io: IntersectionObserver;
    let count = 0

    $: if(!!observedElement) {
        io = new IntersectionObserver((entries) => {
            if(entries[0].isIntersecting) {
                count++;
                dispatch('intersect', { count });
            }
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.5
        });

        io.observe(observedElement);
    }
</script>

<div></div>