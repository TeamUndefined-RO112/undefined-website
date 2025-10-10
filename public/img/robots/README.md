# Robot Photos Guide

## How to Add Photos to the Robots Page

### Step 1: Organize Your Photos

Create folders for each robot in this directory:
```
/public/img/robots/
├── vik/           (for 2024-2025 season robot)
├── robot2023/     (for previous seasons)
└── robot2022/     (and so on...)
```

### Step 2: Add Your Photos

Copy your robot photos into the appropriate folder. For example:
```
/public/img/robots/vik/
├── front-view.jpg
├── side-view.jpg
├── competition-action.jpg
├── team-photo.jpg
└── close-up-mechanism.jpg
```

**Recommended specs:**
- Format: JPG or PNG
- Size: 1200-2000px wide (will be automatically resized)
- Aspect ratio: 4:3 works best
- File size: < 2MB per image

### Step 3: Update the Robots Page

Open `/src/pages/robots/index.astro` and find the gallery section for your robot.

**Uncomment the example gallery code** (around line 111) and customize:

```html
<div class="gallery-grid">
    <div class="gallery-item">
        <img src="/img/robots/vik/front-view.jpg" alt="VIK Robot - Front View" />
        <div class="gallery-overlay">
            <p>Front View</p>
        </div>
    </div>
    <!-- Add more gallery-item divs for each photo -->
</div>
```

**Delete the placeholder div** (the one with the dashed border).

### Step 4: Gallery Features

Each photo will have:
- ✨ Hover zoom effect
- 🏷️ Caption overlay (shows on hover)
- 🖼️ Responsive grid layout
- 🎨 Green border with glow effect

### Example: Adding 4 Photos

```html
<div class="gallery-grid">
    <div class="gallery-item">
        <img src="/img/robots/vik/photo1.jpg" alt="VIK - Front View" />
        <div class="gallery-overlay"><p>Front View</p></div>
    </div>
    <div class="gallery-item">
        <img src="/img/robots/vik/photo2.jpg" alt="VIK - Competition" />
        <div class="gallery-overlay"><p>Competition Day</p></div>
    </div>
    <div class="gallery-item">
        <img src="/img/robots/vik/photo3.jpg" alt="VIK - Mechanism" />
        <div class="gallery-overlay"><p>Lifting Mechanism</p></div>
    </div>
    <div class="gallery-item">
        <img src="/img/robots/vik/photo4.jpg" alt="VIK - Team" />
        <div class="gallery-overlay"><p>Team Photo</p></div>
    </div>
</div>
```

### Tips

1. **Photo naming**: Use descriptive names (e.g., `front-view.jpg` not `IMG_1234.jpg`)
2. **Alt text**: Always include descriptive alt text for accessibility
3. **Captions**: Keep overlay text short and descriptive
4. **Order**: Photos appear left-to-right, top-to-bottom
5. **Quantity**: Add as many photos as you want - the grid auto-adjusts!

### Adding Photos for Other Robots

1. Create a new folder: `/public/img/robots/[robot-name]/`
2. Copy the VIK gallery code in the robots page
3. Change the season title and robot name
4. Update image paths to match your new folder
5. Add your photos!

---

Need help? Check the commented example in `/src/pages/robots/index.astro` (line ~111)
