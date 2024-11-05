<script lang="ts">
    let { data } = $props();
</script>

<div class="posts">
    {#each data.posts as post}
        <a href="/{post.slug}" class="post">
            <h3>{post.title}</h3>
            <p class="meta">{post.date}</p>
            <p>{post.description}</p>
            <div class="tags">
                {#each post.tags as tag}
                    <span class="tag">{tag}</span>
                {/each}
            </div>
        </a>
    {/each}
</div>

<style>
    .posts {
        display: grid;
        grid-row: 1;
        gap: 1.5rem;
    }

    .post {
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 1rem;
        text-decoration: none;
        color: #333;
        transition: transform 0.3s ease;
    }

    .post:hover {
        transform: translateY(-4px);
    }

    .meta {
        color: #666;
        font-size: 0.875rem;
        margin-bottom: 0.5rem;
    }

    .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-top: 1rem;
    }

    .tag {
        background-color: #f0f0f0;
        border-radius: 4px;
        padding: 0.25rem 0.5rem;
        font-size: 0.75rem;
    }
</style>
