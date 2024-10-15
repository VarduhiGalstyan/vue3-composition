import { ref } from "vue";

export function useFetch(url) {
    const posts = ref(null);
    const error = ref(null);

    async function doFetch() {
        try {
            // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const res = await fetch(url);
            posts.value = await res.json();  
        }
        catch(e) {
            error.value = e; 
        }   
    }

    doFetch();

    return{ posts, error };
}