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
        <div class="corner-accent top-left"></div>
        <div class="corner-accent top-right"></div>
        <div class="corner-accent bottom-left"></div>
        <div class="corner-accent bottom-right"></div>

        <div class="part-image-container">
          <img src={fieldPart.image} alt={fieldPart.name}>
        </div>
        <h3 class="part-name">{fieldPart.name}</h3>
        <div class="part-pricing">
          <p class="price-label">Price/item: <span class="price-value">${fieldPart.price_item}</span></p>
          <p class="price-label total">Total: <span class="price-value total">${fieldPart.total}</span></p>
        </div>
      </div>
    {/each}
  </div>

  <style>
    .field-parts-list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 25px;
      margin-top: 40px;
      padding: 20px;
    }

    .field-part-item {
      position: relative;
      display: flex;
      flex-direction: column;
      background: linear-gradient(135deg, rgba(24, 24, 24, 0.98) 0%, rgba(18, 18, 18, 0.98) 100%);
      border: 2px solid rgba(81, 146, 89, 0.3);
      clip-path: polygon(
        0 0,
        calc(100% - 12px) 0,
        100% 12px,
        100% 100%,
        12px 100%,
        0 calc(100% - 12px)
      );
      padding: 0;
      transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      overflow: hidden;
    }

    .field-part-item::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(81, 146, 89, 0.08), transparent);
      transition: left 0.6s ease;
      z-index: 1;
    }

    .field-part-item:hover::before {
      left: 100%;
    }

    .field-part-item:hover {
      transform: translateY(-5px);
      border-color: rgba(81, 146, 89, 0.6);
      box-shadow: 0 12px 35px rgba(81, 146, 89, 0.25),
                  0 0 25px rgba(81, 146, 89, 0.12);
    }

    /* Corner accents */
    .corner-accent {
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid rgba(81, 146, 89, 0.4);
      transition: all 0.3s ease;
      z-index: 2;
    }

    .corner-accent.top-left {
      top: 6px;
      left: 6px;
      border-right: none;
      border-bottom: none;
    }

    .corner-accent.top-right {
      top: 6px;
      right: 6px;
      border-left: none;
      border-bottom: none;
    }

    .corner-accent.bottom-left {
      bottom: 6px;
      left: 6px;
      border-right: none;
      border-top: none;
    }

    .corner-accent.bottom-right {
      bottom: 6px;
      right: 6px;
      border-left: none;
      border-top: none;
    }

    .field-part-item:hover .corner-accent {
      border-color: rgba(81, 146, 89, 0.8);
      width: 14px;
      height: 14px;
    }

    .part-image-container {
      width: 100%;
      height: 180px;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px;
      border-bottom: 2px solid rgba(81, 146, 89, 0.3);
    }

    .part-image-container img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
      filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }

    .field-part-item:hover .part-image-container img {
      transform: scale(1.05);
    }

    .part-name {
      font-family: 'Rajdhani', sans-serif;
      font-size: 1.1rem;
      font-weight: 700;
      color: rgb(81, 146, 89);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 15px 15px 10px 15px;
      text-align: center;
      position: relative;
      z-index: 2;
      min-height: 2.4em;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .part-pricing {
      padding: 15px;
      background: rgba(81, 146, 89, 0.05);
      border-top: 1px solid rgba(81, 146, 89, 0.2);
      position: relative;
      z-index: 2;
    }

    .price-label {
      font-family: 'Rajdhani', sans-serif;
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 5px 0;
      text-align: center;
    }

    .price-value {
      font-family: 'Orbitron', monospace;
      font-weight: 700;
      color: rgb(81, 146, 89);
      font-size: 1rem;
    }

    .price-label.total {
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid rgba(81, 146, 89, 0.2);
    }

    .price-value.total {
      font-size: 1.1rem;
      text-shadow: 0 0 8px rgba(81, 146, 89, 0.3);
    }

    @media only screen and (max-width: 640px) {
      .field-parts-list {
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 15px;
        padding: 10px;
      }

      .part-image-container {
        height: 150px;
      }

      .part-name {
        font-size: 1rem;
      }

      .price-label {
        font-size: 0.85rem;
      }
    }
  </style>
  