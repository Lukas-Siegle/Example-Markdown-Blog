<!-- src/routes/+page.svelte -->
<script lang="ts">
    import { marked } from "marked";

    let { data } = $props();
</script>

<a href="/" class="go-back">Go Back</a>
<div class="container">
    <div class="content">
        {@html marked(data.content)}
    </div>
</div>

<style>
    .container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 0 1rem;
    }

    .go-back {
        display: inline-block;
        background-color: #f0f0f0;
        border-radius: 4px;
        padding: 0.5rem 1rem;
        text-decoration: none;
        color: #333;
        transition: background-color 0.3s ease;
    }

    .go-back:hover {
        background-color: #e0e0e0;
    }

    .content {
        margin-top: 2rem;
        line-height: 1.6;
    }
</style>
