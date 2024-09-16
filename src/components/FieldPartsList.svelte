<script lang="ts">
    interface FieldPart {
      name: string;
      image: string;
      price_item: string | number;
      total: string | number;
    }
  
    export let fieldParts: FieldPart[] = [];
  </script>
  
  <div class="field-parts-list">
    {#each fieldParts as fieldPart}
      <div class="field-part-item">
        <img src={fieldPart.image} alt={fieldPart.name}>
        <h3>{fieldPart.name}</h3>
        <p>Price/item: {fieldPart.price_item} USD</p>
        <p>Total: {fieldPart.total} USD</p>
      </div>
    {/each}
  </div>
  
  <style>
    .field-parts-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-top: 40px;
    }
  
    .field-part-item {
      text-align: center;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;
      background-color: #f9f9f9;
      transition: box-shadow 0.3s ease-in-out;
    }
  
    .field-part-item:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    .field-part-item img {
      width: 150px;
      height: 150px;
      object-fit: scale-down;
      margin-bottom: 10px;
      margin-left:25px;
    }
  
    h3 {
      font-size: 1.2em;
      margin: 10px 0;
      font-family: 'Georgia', serif;
    }
  
    p {
      font-size: 1em;
      color: #555;
    }
  </style>
  