/**
 * BLOG AGGRAVATOR 3000
 * WARNING: This will make your blog incredibly annoying. Use responsibly (or irresponsibly).
 * To deactivate: Clear localStorage and refresh, or just remove this script.
 */

(function() {
    'use strict';
    
    // Check if user has been aggravated already (we're mean, not monsters)
    if (localStorage.getItem('aggravated') === 'true') {
        return;
    }
    
    // Aggravation level tracker
    let aggravationLevel = 0;
    
    // 1. Immediate notification spam
    setTimeout(() => {
        alert("🔔 Subscribe to our newsletter?");
    }, 500);
    
    // 2. Scroll-based pop-ups at 25%, 50%, 75%, 100%
    const scrollTriggers = [0.25, 0.5, 0.75, 1.0];
    let triggeredLevels = new Set();
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
        
        scrollTriggers.forEach(trigger => {
            if (scrollPercent >= trigger && !triggeredLevels.has(trigger)) {
                triggeredLevels.add(trigger);
                showModal(`You're ${Math.round(trigger * 100)}% through! Want our newsletter? 📧`);
            }
        });
    });
    
    // 3. The dreaded overlay modal
    function showModal(message) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: white;
            padding: 40px;
            border-radius: 10px;
            max-width: 500px;
            text-align: center;
            font-family: Arial, sans-serif;
        `;
        
        modal.innerHTML = `
            <h2>${message}</h2>
            <input type="email" placeholder="Your email..." style="width: 100%; padding: 10px; margin: 20px 0;">
            <button onclick="this.parentElement.parentElement.remove();" style="padding: 10px 20px; cursor: pointer;">
                Maybe Later (we'll ask again in 30 seconds)
            </button>
        `;
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        // Ask again in 30 seconds
        setTimeout(() => overlay.remove(), 30000);
    }
    
    // 4. "Are you still reading?" after 2 minutes
    setTimeout(() => {
        if (confirm("🤔 Are you still reading? Click OK to confirm you're human!")) {
            alert("Thanks! Just checking 😊");
        }
    }, 120000);
    
    // 5. Floating subscription box that follows you
    const floatingBox = document.createElement('div');
    floatingBox.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 300px;
        background: #ff6b6b;
        color: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        z-index: 999998;
        font-family: Arial, sans-serif;
        animation: bounce 2s infinite;
    `;
    floatingBox.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 10px;">📬 Don't Miss Out!</div>
        <div style="font-size: 14px; margin-bottom: 10px;">Join 50,000,000 subscribers!</div>
        <button onclick="this.parentElement.remove();" style="padding: 5px 10px; cursor: pointer;">
            X
        </button>
    `;
    
    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(floatingBox);
    
    // 6. Random "WAIT!" interception
    setTimeout(() => {
        const wait = document.createElement('div');
        wait.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: yellow;
            padding: 30px;
            border: 5px solid red;
            z-index: 1000000;
            font-size: 24px;
            font-weight: bold;
            text-align: center;
        `;
        wait.innerHTML = 'WAIT!<br>Before you go...<br><small>(Just kidding, you can close this)</small><br><button onclick="this.parentElement.remove()">Close</button>';
        document.body.appendChild(wait);
    }, 45000);
    
    // 7. Mark as aggravated
    setTimeout(() => {
        localStorage.setItem('aggravated', 'true');
    }, 1000);
    
    console.log('🎉 Blog Aggravator 3000 activated! Your readers will love this!');
})();