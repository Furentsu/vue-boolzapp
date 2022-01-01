const root = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michael',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Did you walk the dog?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Remember to feed him',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'All done!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Joe',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Hey, what\'s up?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Same as always.. you free tonight?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Nope, I have to go the cinema',
                        status: 'sent'
                    }
                ],
            },
        
            {
                name: 'Tim',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'I hate Jenny...',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Are you sure this is the right chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'lol',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'George',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'What about going to the cinema??',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'No, I\'m lazy.',
                        status: 'received'
                    }
                ],
            },
        ],
        selectedConversation: 0,
        newMessage: '',
        nameSearch: ''
    },
        methods: {

        getLastTextMessage: function(index) {
            let messages = this.contacts[index].messages;
            return messages[messages.length - 1].text;
        },

        getLastTextMessageStatus: function(index) {
            let messages = this.contacts[index].messages;
            return messages[messages.length - 1].status;
        },

        getLastTextDate: function(index) {
            let messages = this.contacts[index].messages;
            return messages[messages.length - 1].date;
        },

        getConversationIndex: function(index) {
            this.selectedConversation = index;
        },

        sentMessageDate: function() {
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            const h = today.getHours();
            const min = today.getMinutes();
            const s = today.getSeconds();

            return dd + '/' + mm + '/' + yyyy + ' ' + h + ':' + min + ':' + s;
        },

        sendMessage: function() {
            if (this.newMessage.trim().length > 0) {
                this.contacts[this.selectedConversation].messages.push({'date': this.sentMessageDate(), 'text':this.newMessage, 'status':'sent'});
                this.newMessage = '';
                setTimeout(this.messageAnswer, 3000);
            } 
        },

        messageAnswer: function() {
            this.contacts[this.selectedConversation].messages.push({'date': this.sentMessageDate(), 'text':'Ok!', 'status':'received'});
        },

        filterNames: function() {
           const self = this;

           this.contacts.forEach(element => {
               if (element.name.toLowerCase().includes(self.nameSearch.toLowerCase())) {
                    element.visible = true;     
               } else {
                    element.visible = false;
               }
           })
        }
    }
})