/**
 * BLOG AGGRAVATOR 3000 - MAXIMUM ANNOYANCE EDITION
 * Now with 300% more aggravation!
 */

(function() {
    'use strict';
    
    console.log('🎉 Blog Aggravator 3000 - MAXIMUM ANNOYANCE EDITION loading...');
    
    // Check if already aggravated
    if (localStorage.getItem('aggravated') === 'true') {
        console.log('⚠️ Already aggravated, skipping...');
        return;
    }
    
    // Track if user answered cookie question
    let cookieAnswered = false;
    let timesAskedAboutCookies = 0;
    
    // =============================================
    // 1. INJECT ABSURD ADS BETWEEN PARAGRAPHS
    // =============================================
    function injectAbsurdAds() {
        const paragraphs = document.querySelectorAll('p');
        const absurdAds = [
            { 
                text: "🎰 CONGRATULATIONS! You're visitor #999,999! Click here to claim your FREE iPad!",
                color: "#ff0000",
                blink: true
            },
            { 
                text: "💊 Doctors HATE this one weird trick! Lose 50 pounds in 3 days!",
                color: "#00ff00",
                blink: false
            },
            { 
                text: "👴 Meet hot singles in your area who are ALSO interested in reading this blog post!",
                color: "#ff00ff",
                blink: false
            },
            { 
                text: "🏠 Refinance your mortgage NOW! Rates have never been lower! (probably)",
                color: "#ffff00",
                blink: false
            },
            { 
                text: "🎓 Get your online degree in BLOG READING! Accredited* (*not actually accredited)",
                color: "#00ffff",
                blink: true
            },
            { 
                text: "⚡ Your computer has (5) viruses! Download our antivirus now! Totally legit!",
                color: "#ff6600",
                blink: true
            },
            {
                text: "💰 I made $5000 working from home! You can too! Ask me how! (Don't actually ask)",
                color: "#9900ff",
                blink: false
            },
            {
                text: "🔮 PSYCHIC READING: I predict you will... keep reading this blog post",
                color: "#ff1493",
                blink: false
            }
        ];
        
        paragraphs.forEach((p, index) => {
            // Insert ad after every other paragraph
            if (index % 2 === 1) {
                const ad = absurdAds[index % absurdAds.length];
                const adDiv = document.createElement('div');
                adDiv.style.cssText = `
                    background: ${ad.color};
                    color: black;
                    padding: 20px;
                    margin: 20px 0;
                    border: 5px dashed #000;
                    font-size: 18px;
                    font-weight: bold;
                    text-align: center;
                    font-family: 'Comic Sans MS', cursive;
                    ${ad.blink ? 'animation: blink 1s infinite;' : ''}
                    cursor: pointer;
                `;
                adDiv.innerHTML = ad.text;
                adDiv.onclick = () => alert("Nice try! This ad doesn't actually go anywhere 😄");
                p.after(adDiv);
            }
        });
        
        console.log(`✅ Injected ${Math.floor(paragraphs.length / 2)} absurd ads`);
    }
    
    // Add blink animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0.3; }
        }
        @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-10px); }
            75% { transform: translateX(10px); }
        }
    `;
    document.head.appendChild(style);
    
    // =============================================
    // 2. COOKIE CONSENT POPUP (GDPR NIGHTMARE)
    // =============================================
    function showCookieConsent() {
        const overlay = document.createElement('div');
        overlay.id = 'cookie-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 9999999;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
        `;
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 600px;
            max-height: 80vh;
            overflow-y: auto;
        `;
        
        modal.innerHTML = `
            <h2>🍪 We Value Your Privacy (Sort Of)</h2>
            <p>We and our 817 partners use cookies to:</p>
            <ul style="text-align: left; margin: 20px 0;">
                <li>Track your every move</li>
                <li>Sell your data to the highest bidder</li>
                <li>Know what you had for breakfast</li>
                <li>Predict your future (with alarming accuracy)</li>
                <li>Make our CEO slightly richer</li>
                <li>Store your embarrassing search history</li>
                <li>Customize ads you'll never click</li>
            </ul>
            
            <div style="max-height: 200px; overflow-y: scroll; border: 1px solid #ccc; padding: 10px; margin: 20px 0; font-size: 12px;">
                <label><input type="checkbox" checked> Essential Cookies (required)</label><br>
                <label><input type="checkbox" checked> Analytics Cookies</label><br>
                <label><input type="checkbox" checked> Marketing Cookies</label><br>
                <label><input type="checkbox" checked> Tracking Cookies</label><br>
                <label><input type="checkbox" checked> Social Media Cookies</label><br>
                <label><input type="checkbox" checked> Third-Party Cookies</label><br>
                <label><input type="checkbox" checked> Fourth-Party Cookies</label><br>
                <label><input type="checkbox" checked> Cookies That Track Cookies</label><br>
                <label><input type="checkbox" checked> Chocolate Chip Cookies</label><br>
                <label><input type="checkbox" checked> Fortune Cookies</label><br>
                <label><input type="checkbox" checked> Cookie Monster's Cookies</label><br>
                <label><input type="checkbox" checked> Cookies From That One Website You Visited In 2007</label><br>
                <label><input type="checkbox" checked> Existential Dread Cookies</label><br>
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button id="accept-all" style="flex: 1; padding: 15px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                    Accept All
                </button>
                <button id="reject-all" style="flex: 1; padding: 15px; background: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 8px;">
                    Reject All (good luck finding this button)
                </button>
            </div>
            
            <p style="font-size: 10px; margin-top: 20px; color: #666;">
                By using this website, you agree to our 
                <a href="#" onclick="alert('Terms of Service: We own your soul now.'); return false;">Terms of Service</a>,
                <a href="#" onclick="alert('Privacy Policy: What privacy?'); return false;">Privacy Policy</a>, and
                <a href="#" onclick="alert('Cookie Policy: Nom nom nom'); return false;">Cookie Policy</a>.
                You also agree that we're not actually asking for permission, just informing you.
            </p>
        `;
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
        
        document.getElementById('accept-all').onclick = () => {
            cookieAnswered = true;
            timesAskedAboutCookies++;
            overlay.remove();
            
            // "Forgot" what user said after 15 seconds
            setTimeout(showForgotCookieAnswer, 15000);
        };
        
        document.getElementById('reject-all').onclick = () => {
            alert("Sorry, that button doesn't actually work. Try 'Accept All' instead! 😊");
        };
    }
    
    // =============================================
    // 3. "FORGOT" COOKIE ANSWER
    // =============================================
    function showForgotCookieAnswer() {
        if (timesAskedAboutCookies > 3) {
            console.log('User has suffered enough cookie questions');
            return;
        }
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 30px;
            border: 3px solid #ff0000;
            border-radius: 10px;
            z-index: 9999998;
            box-shadow: 0 0 50px rgba(0,0,0,0.5);
            animation: shake 0.5s infinite;
            font-family: Arial, sans-serif;
            text-align: center;
        `;
        
        overlay.innerHTML = `
            <h3>🤔 Wait... Did You Accept Cookies?</h3>
            <p>Sorry, we forgot what you said!</p>
            <p>Can you tell us again?</p>
            <button onclick="this.parentElement.remove();" style="padding: 10px 20px; margin: 10px; cursor: pointer; background: #4CAF50; color: white; border: none; border-radius: 5px;">
                Yes (Again)
            </button>
            <button onclick="alert('Oops! That button broke. Please choose Yes instead.'); return false;" style="padding: 10px 20px; margin: 10px; cursor: pointer; background: #ccc; color: #666; border: none; border-radius: 5px; font-size: 10px;">
                No
            </button>
        `;
        
        document.body.appendChild(overlay);
        timesAskedAboutCookies++;
        
        // Ask again after another 20 seconds
        setTimeout(() => {
            overlay.remove();
            if (timesAskedAboutCookies < 3) {
                setTimeout(showForgotCookieAnswer, 20000);
            }
        }, 10000);
    }
    
    // =============================================
    // 4. DISABLE ADBLOCKER NOTICE
    // =============================================
    function showAdBlockerNotice() {
        const notice = document.createElement('div');
        notice.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: #ff0000;
            color: white;
            padding: 20px;
            text-align: center;
            z-index: 9999997;
            font-family: Arial, sans-serif;
            font-size: 18px;
            font-weight: bold;
        `;
        notice.innerHTML = `
            ⚠️ PLEASE DISABLE YOUR ADBLOCKER ⚠️
            <br>
            <small>(Even though you probably don't have one, we just want you to think you do)</small>
        `;
        document.body.appendChild(notice);
    }
    
    // =============================================
    // 5. AUTO-PLAYING VIDEO (MUTED BUT ANNOYING)
    // =============================================
    function showAutoPlayVideo() {
        const videoContainer = document.createElement('div');
        videoContainer.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            background: black;
            border: 3px solid #ff0000;
            border-radius: 10px;
            z-index: 9999996;
            animation: bounce 2s infinite;
        `;
        
        videoContainer.innerHTML = `
            <div style="background: #333; color: white; padding: 10px; display: flex; justify-content: space-between; align-items: center;">
                <span style="font-family: Arial; font-size: 14px;">📺 Ad playing in: 5...4...3...</span>
                <button onclick="this.parentElement.parentElement.remove();" style="background: #ff0000; color: white; border: none; padding: 5px 10px; cursor: pointer; border-radius: 3px;">X</button>
            </div>
            <div style="background: #000; height: 169px; display: flex; align-items: center; justify-content: center; color: white; font-family: Arial;">
                <div style="text-align: center;">
                    <div style="font-size: 40px;">▶️</div>
                    <div>Video would autoplay here</div>
                    <div style="font-size: 12px; margin-top: 10px;">(But we're not THAT evil)</div>
                </div>
            </div>
        `;
        
        document.body.appendChild(videoContainer);
    }
    
    // =============================================
    // 6. CHAT WIDGET THAT KEEPS REOPENING
    // =============================================
    function createAnnoyingChatWidget() {
        let chatClosed = 0;
        
        function showChat() {
            if (chatClosed > 3) return; // Stop after 3 times
            
            const chat = document.createElement('div');
            chat.style.cssText = `
                position: fixed;
                bottom: 80px;
                right: 20px;
                width: 300px;
                background: white;
                border: 2px solid #2196F3;
                border-radius: 10px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                z-index: 9999995;
                font-family: Arial, sans-serif;
            `;
            
            const messages = [
                "Hi! 👋 Need help?",
                "Still there? 🤔",
                "Hello??? 😢",
                "Fine, ignore me then. 😤"
            ];
            
            chat.innerHTML = `
                <div style="background: #2196F3; color: white; padding: 15px; border-radius: 8px 8px 0 0; display: flex; justify-content: space-between; align-items: center;">
                    <span><strong>💬 Chat with us!</strong></span>
                    <button id="close-chat" style="background: none; border: none; color: white; font-size: 20px; cursor: pointer; padding: 0 5px;">×</button>
                </div>
                <div style="padding: 20px; min-height: 100px;">
                    <div style="background: #f0f0f0; padding: 10px; border-radius: 10px; margin-bottom: 10px;">
                        ${messages[chatClosed] || messages[0]}
                    </div>
                    <input type="text" placeholder="Type a message..." style="width: 100%; padding: 10px; border: 1px solid #ccc; border-radius: 5px;" disabled>
                    <small style="color: #999;">All agents are busy helping other imaginary customers</small>
                </div>
            `;
            
            document.body.appendChild(chat);
            
            document.getElementById('close-chat').onclick = () => {
                chat.remove();
                chatClosed++;
                // Reopen after 10 seconds
                if (chatClosed <= 3) {
                    setTimeout(showChat, 10000);
                }
            };
        }
        
        setTimeout(showChat, 5000);
    }
    
    // =============================================
    // 7. NEWSLETTER POPUP (scroll-based)
    // =============================================
    function setupScrollPopups() {
        const scrollTriggers = [0.25, 0.5, 0.75];
        let triggeredLevels = new Set();
        
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.body.scrollHeight;
            
            scrollTriggers.forEach(trigger => {
                if (scrollPercent >= trigger && !triggeredLevels.has(trigger)) {
                    triggeredLevels.add(trigger);
                    showNewsletterPopup(trigger);
                }
            });
        });
    }
    
    function showNewsletterPopup(trigger) {
        const messages = {
            0.25: "Whoa! You're 25% through! Subscribe now!",
            0.5: "Halfway there! Don't miss our newsletter!",
            0.75: "Almost done! One more popup before you finish!"
        };
        
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 9999994;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            background: white;
            padding: 40px;
            border-radius: 10px;
            max-width: 400px;
            text-align: center;
            font-family: Arial, sans-serif;
        `;
        
        modal.innerHTML = `
            <h2>${messages[trigger]}</h2>
            <p>Join 50,000,000 subscribers who get our daily newsletter!</p>
            <input type="email" placeholder="your.email@example.com" style="width: 100%; padding: 10px; margin: 20px 0; border: 1px solid #ccc; border-radius: 5px;">
            <br>
            <button onclick="this.parentElement.parentElement.remove(); alert('Thanks! We\\'ll never actually email you.');" style="padding: 10px 30px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; margin: 5px;">
                Subscribe
            </button>
            <br>
            <button onclick="this.parentElement.parentElement.remove();" style="padding: 10px 30px; background: #ccc; color: #666; border: none; border-radius: 5px; cursor: pointer; margin: 5px; font-size: 10px;">
                No thanks (we'll ask again)
            </button>
        `;
        
        overlay.appendChild(modal);
        document.body.appendChild(overlay);
    }
    
    // =============================================
    // INITIALIZE ALL ANNOYANCES
    // =============================================
    
    // Wait a bit before starting the chaos
    setTimeout(() => {
        injectAbsurdAds();
        showAdBlockerNotice();
        showAutoPlayVideo();
        createAnnoyingChatWidget();
        setupScrollPopups();
        
        // Cookie consent appears after 2 seconds
        setTimeout(showCookieConsent, 2000);
        
        localStorage.setItem('aggravated', 'true');
        console.log('✨ Blog Aggravator 3000 - MAXIMUM ANNOYANCE activated!');
    }, 500);
    
})();