<template>
    <div>
        <p v-html="formatText" :class="[textStyle ? textStyle : '']"></p>
        <span v-show="toText.length > countLetters">
			<a href="#" :class="[linkStyle ? linkStyle : '']" v-show="!activeSeeMore" v-on:click="handleSeeText($event, true)">{{seeMore}}</a>
			<a href="#" :class="[linkStyle ? linkStyle : '']" v-show="activeSeeMore" v-on:click="handleSeeText($event, false)">{{seeLess}}</a>
		</span>
    </div>
</template>

<script>
export default {
    data: () => {
        return ({
            activeSeeMore: false
        });
    },
    props: {
        seeMore: {
            type: String,
            default: 'See More'
        },
        seeLess: {
            type: String,
            default: 'Retract'
        },
        toText: {
            type: String,
            required: true
        },
        textStyle: {
            type: String,
            default: ''
        },
        linkStyle: {
            type: String,
            default: ''
        },
        countLetters: {
            type: [String, Number],
            default: 80
        }
    },
    computed: {
        formatText() {
            var newFormatText = this.toText;
            if (!this.activeSeeMore && this.toText.length > this.countLetters) {
                newFormatText = newFormatText.substring(0, this.countLetters) + " [...] ";
            }
            return newFormatText;
        }
    },
    methods: {
        handleSeeText(e, value) {
            if (this.seeLess !== 'Retract' || this.seeLess !== null) {
                e.preventDefault();
                this.activeSeeMore = value;
            }
        }
    }
};
</script>
