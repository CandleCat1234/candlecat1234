Vue.component("newsticker" {
    data: function()
    {
        return {
            messages: [
                "This is a news ticker.",
                "Inspired by two (or more) incremental games.",
                `<span style="color: hsl(0, 100%, 50%)">C</span>`
                +` <span style="color: hsl(60, 100%, 50%)">H</span>`
                +` <span style="color: hsl(120, 100%, 50%)">R</span>`
                +` <span style="color: hsl(180, 100%, 50%)">O</span>`
                +` <span style="color: hsl(240, 100%, 50%)">M</span>`
                +` <span style="color: hsl(300, 100%, 50%)">A</span>`,
                "179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216",
                () => "\"This Number is randomly generated -> " + Math.pow(10, Math.random() * 3.01).toFixed(2) +
                    ". If it's above 1,000, consider yourself lucky!\" - VeproGames",
            ],
            currentMessage: "",
            messageIndex: -1
        }
    },
    computed: {
        animationDuration: function()
        {
            return 10 + 0.1 * this.currentMessage.replace(/<.*?>/g, "").length;
        }
    },
    methods: {
        getMessage: function()
        {
            let arr = Array.from(this.messages);
            if(this.messageIndex !== -1)
            {
                arr.splice(this.messageIndex, 1);
            }
            let index = Math.floor(Math.random() * arr.length);
            this.messageIndex = index;
            let element = arr[index];
            this.currentMessage = typeof element === "string" ? element : element();
        }
    },
    mounted: function()
    {
        this.getMessage();
        this.$refs.message.onanimationiteration = e =>
        {
            let anim = this.$refs.message.style.animation.slice();
            this.getMessage();
            this.$refs.message.style.animation = "none";
            void this.$refs.message.offsetWidth; //black magic
            this.$refs.message.style.animation = anim;
            Vue.nextTick(() =>
            {
                if(this.$refs.message.style.animationDuration === "")
                {
                    this.$refs.message.style.animationDuration = this.animationDuration + "s";
                }
            });
        };
    },
    template: `<div class="news-ticker">
    <span ref="message" :style="{'animation-duration': animationDuration + 's'}" v-html="currentMessage"></span>
</div>`
})
