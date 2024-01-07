(() => {
    const urlHost = window.location.hostname;
    const urlHostDomain = urlHost.split('.').slice(-2).join('.');
    console.log({urlHost, urlHostDomain})
    if(urlHost === 'www.youtube.com'){
        const getChannelName = () => {
            // Filter on news category
            const videoQuery = 'ytd-rich-item-renderer';
            const video = document.querySelectorAll(videoQuery);
            
            if(video.length > 0) {
                video.forEach((vid) => {
                    const channelNameQuery = 'div#content > ytd-rich-grid-media > div#dismissible > div#details > div#meta > ytd-video-meta-block > div#metadata > div#byline-container > ytd-channel-name > div#container > div#text-container > yt-formatted-string > a.yt-simple-endpoint.style-scope.yt-formatted-string';
                    const channelName = vid.querySelector(channelNameQuery);
                    const channelNameLower = channelName?.innerText.toLowerCase();
                    if(channelNameLower && channelNameLower.includes('tribun')) {
                        vid.remove();
                    }
                })
            }

            // Filter on search result
            const searchResultQuery = 'ytd-video-renderer';
            const searchResult = document.querySelectorAll(searchResultQuery);
            console.log({searchResult})

            if(searchResult.length > 0) {
                searchResult.forEach((vid) => {
                    const channelNameQuery = 'div#dismissible > div.text-wrapper.style-scope.ytd-video-renderer > div#channel-info > ytd-channel-name > div#container > div#text-container > ytd-formatted-string > a.yt-simple-endpoint.style-scope.yt-formatted-string';
                    const channelName = vid.querySelector(channelNameQuery);
                    console.log({channelName, text: channelName?.innerText})
                    const channelNameLower = channelName?.innerText.toLowerCase();
                    if(channelNameLower && channelNameLower.includes('tribun')) {
                        vid.remove();
                    }
                })
            }
        }
    
        if(true) {
            setInterval(getChannelName, 100)
        }
    }

    if(urlHostDomain === 'tribunnews.com') {
        window.location.href = "https://google.com";
        alert('You are not allowed to access this website! Remember: No Trashy News!')
    }
})();
