<template>
    <div>
        <Navbar />
        <div class="max-grid margin-vertical-3">
            <section class="margin-bottom-2" id="contact-content">
                <h4 class="lex"><strong>Contact</strong></h4>
                <hr>
                <div class="callout success" v-if="success">
                    <p>Thank you! Your message has been sent successfully...</p>
                </div>
                <div class="callout alert" v-if="failed">
                    <p>Something went wrong, please try again!</p>
                </div>
                <div class="content">
                    <p>Want to say hi? There are a few ways to get in touch with me. I love meeting
                        new people!</p>
                    <ul class="social-icons margin-0 margin-bottom-2">
                        <li><a target="_blank" href="https://github.com/SanjayPJ" class="social-icon"> <i class="fa radius fa-github"></i></a></li>
                        <li><a target="_blank" href="https://www.linkedin.com/in/sanjay-pj/" class="social-icon margin-social"> <i class="fa fa-linkedin radius"></i></a></li>
                        <li><a target="_blank" href="https://twitter.com/SanjayPJ00" class="social-icon margin-social"> <i class="fa radius fa-twitter"></i></a></li>
                    </ul>
                    <form @submit.prevent="submit_data">
                        <div class="w3-section">
                            <label>Name</label>
                            <input v-model="name" class="radius" type="text" name="Name" required>
                        </div>
                        <div class="w3-section">
                            <label>Email</label>
                            <input v-model="email" class="radius" type="email" name="Email" required>
                        </div>
                        <div class="w3-section">
                            <label>Message</label>
                            <textarea v-model="message" class="radius" name="" id="" cols="30" rows="5" required></textarea>
                        </div>
                        <button data-open="modal-sorry" id="myAnchor" type="submit" class="button radius margin-top-1">Send
                            Message</button>
                    </form>
                </div>
                <Footer />
            </section>
        </div>
    </div>
</template>
<style>
.margin-social {
    margin-left: 5px;
}
</style>
<script>
import Footer from '../components/Footer.vue'
import Navbar from '../components/Navbar.vue'

import db from '@/firebase/init'

export default {
    data() {
        return {
            name: null,
            email: null,
            message: null,
            success: false,
            failed: false
        }
    },
    components: {
        Footer,
        Navbar
    },
    methods: {
        submit_data() {
            if (this.name && this.email && this.message) {
                db.collection('messages').add({
                    name: this.name,
                    email: this.email,
                    message: this.message
                }).then(() => {
                    this.success = true;
                    this.name = "";
                    this.email = "";
                    this.message = "";
                }).catch(() => {
                    this.failed = true;
                });
            }
        },
    },
}
</script>