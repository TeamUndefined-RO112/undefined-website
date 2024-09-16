<script lang="ts">
    interface Part {
      name: string;
      image: string;
      price_item: string | number;
      total: string | number;
    }
  
    export let parts: Part[] = [];
  </script>
  
  <div class="part-list">
    {#each parts as part}
      <div class="part-item">
        <img src={part.image} alt={part.name}>
        <h3>{part.name}</h3>
        <p>Price/item: {part.price_item} USD</p>
        <p>Total: {part.total} USD</p>
      </div>
    {/each}
  </div>
  
  <style>
    .part-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
  
    .part-item {
      text-align: center;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
      transition: box-shadow 0.3s ease-in-out;
    }
  
    .part-item:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    .part-item img {
      width: 150px;
      height: 150px;
      object-fit: scale-down;
      margin-bottom: 10px;
      margin-left: 25px;
    }
  
    /* Stilizare titluri pentru piese */
    h3 {
      font-size: 1.2em;
      margin: 10px 0;
      font-family: 'Georgia', serif; /* Font clasic pentru titluri */
    }
  
    p {
      font-size: 1em;
      color: #555;
    }
  </style>
  