import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js'

createApp({
    data() {
        return {
            page: 'setup',
            
            new_name: '',
            new_names: '',

            new_prize: '',
            new_sponsor: '',
            new_prizes: '',

            is_editing_prize: false,
            edit_prize_index: null,

            is_editing_person: false,
            edit_person_index: null,

            search_keyword: '',

            selected_person: null,
            spinning_person: false,
            person_index: 0,
            spinning_person_interval: null,

            selected_prize: null,
            spinning_prize: false,
            spinning_prize_interval: null,

            sample_entries: "John Doe\nJane Doe\nJohn Smith\nJane Smith\nJohn Wayne\nJane Wayne\nJohn Galt\nJane Galt\nJohn Lennon\nJane Lennon\nJohn Wick\nJane Wick",
            
            entries: [],

            sample_prizes:
                "Sponsor 1|Prize 1\nSponsor 2|Prize 2\nSponsor 3|Prize 3\nSponsor 4|Prize 4\nSponsor 5|Prize 5\nSponsor 6|Prize 6",

            prizes: [],
            winners: [],
        }
    },

    watch: {
        // any change to entries, prizes, winners, etc. will be saved to local storage
        entries: {
            handler() {
                // localStorage.entries = JSON.stringify(this.entries);
                console.log("saving entries..")
            },
            deep: true,
        }

    },

    computed: {
        is_not_rolling_both() {
            return !this.spinning_prize && !this.spinning_person;
        },

        is_rolling_both() {
            return this.spinning_prize && this.spinning_person;
        },

        can_record_result() {
            return this.is_not_rolling_both && 
                (this.selected_prize != null) && 
                (this.selected_person != null) &&
                (this.entries.length > 0) &&
                (this.prizes.length > 0)
        }
    },

    methods: {
        changePage(new_page) {
            // save all changes
            this.savePrize();
            this.savePerson();

            this.page = new_page;
        },

        addSampleNames() {
            this.new_names = this.sample_entries;
        },

        addSamplePrizes() {
            this.new_prizes = this.sample_prizes;
        },

        addSingleName() {
            this.new_name = this.new_name.trim();

            if (this.new_name.trim() == '') {
                alert('Please enter a name');
                return;
            }

            // check if name already exists
            if (this.entries.includes(this.new_name) || this.winners.some(winner => winner.person == this.new_name)) {
                alert('Name already exists');
                return;
            }

            this.entries.push(this.new_name);
            this.new_name = '';
        },

        addMultipleNames() {
            if (this.new_names.trim() == '') {
                alert('Please enter names');
                return;
            }

            let names = this.new_names.split('\n');


            // if names already exist, skip them and alert
            let existing_names = [];
            names.forEach(name => {
                // remove trailing space
                name = name.trim();

                // check if name is in entries or in winners list
                if (this.entries.includes(name) || this.winners.some(winner => winner.person == name)) {
                    existing_names.push(name);
                }
                else {
                    this.entries.push(name);
                }
            });

            if (existing_names.length > 0) {
                alert('The following names already exist: ' + existing_names.join(', ') + '. They were skipped.');
            }

            this.new_names = '';
        },

        editPerson(index) {
            this.savePrize();
            this.is_editing_person = true;
            this.edit_person_index = index;
        },

        savePerson() {
            this.is_editing_person = false;
            this.edit_person_index = null;
        },

        deletePerson(index) {
            this.savePrize();
            this.savePerson();
            
            if (confirm("Are you sure you want to delete this entry?")) {
                this.entries.splice(index, 1);
            }
        },

        deletePrize(index) {

            this.savePrize();
            this.savePerson();

            if (confirm("Are you sure you want to delete this prize?")) {
                this.prizes.splice(index, 1);
            }
        },

        addSinglePrize() {
            if (this.new_prize.trim() == '') {
                alert('Please enter a prize name');
                return;
            }

            if (this.new_sponsor.trim() == '') {
                alert('Please enter a sponsor name');
                return;
            }

            this.prizes.push({
                name: this.new_prize,
                sponsor: this.new_sponsor,
            });

            this.new_prize = '';
            this.new_sponsor = '';
        },

        addMultiplePrizes() {
            if (this.new_prizes.trim() == '') {
                alert('Please enter prizes');
                return;
            }

            let prizes = this.new_prizes.split('\n');

            // prizes are in this format: <sponsor name>|<prize>
            prizes.forEach(prize => {
                let prize_parts = prize.split('|');

                if (prize_parts.length != 2) {
                    alert('Invalid prize format: ' + prize);
                    return;
                }

                this.prizes.push({
                    name: prize_parts[1],
                    sponsor: prize_parts[0],
                });
            }); 

            this.new_prizes = '';
        },

        editPrize(index) {
            this.savePerson();
            this.is_editing_prize = true;
            this.edit_prize_index = index;
        },

        savePrize() {
            this.is_editing_prize = false;
            this.edit_prize_index = null;
        },

        rollBoth() {
            this.rollPrize();
            this.rollPerson();
        },

        stopBoth() {
            this.stopRollPrize();
            this.stopRollPerson();
        },

        saveResult() {
            this.winners.push({
                // person_index: this.person_index,
                // prize_index: this.prize_index,
                person: this.selected_person,
                prize: this.selected_prize,
            });
            
            this.entries.splice(this.person_index, 1);
            this.prizes.splice(this.prize_index, 1);

            this.selected_person = null;
            this.selected_prize = null;
        },

        rollPrize() {
            this.spinning_prize = true;

            let i = 0;

            this.spinning_prize_interval = setInterval(() => {
                this.selected_prize = this.prizes[i];
                this.prize_index = i;

                if (this.prizes.length - 1 == i) {
                    i = 0
                } else {
                    i++
                }
            }, 100);
        },

        stopRollPrize() {
            this.spinning_prize = false;
            this.spinning_prize_interval = clearInterval(this.spinning_prize_interval);

            let random_prize_index = Math.floor(Math.random() * this.prizes.length);
            this.selected_prize = this.prizes[random_prize_index];
            this.prize_index = random_prize_index;
        },
        
        rollPerson() {

            this.spinning_person = true;

            let i = 0;

            this.spinning_person_interval = setInterval(() => {
                this.selected_person = this.entries[i];
                this.person_index = i;

                if (this.entries.length - 1 == i) {
                    i = 0
                } else {
                    i++
                }
            }, 100);
        },

        stopRollPerson() {
            this.spinning_person = false;
            this.spinning_person_interval = clearInterval(this.spinning_person_interval);

            let random_person_index = Math.floor(Math.random() * this.entries.length);
            this.selected_person = this.entries[random_person_index];
            this.person_index = random_person_index;
        },

        reAddAllPrizeWinners() {
            if (this.entries.length == 0 && this.prizes.length > 0) {
                if (confirm("Are you sure you want to re-add all prize winners?")) {
                    this.winners.forEach(winner => {
                        this.entries.push(winner.person);
                        // this.prizes.push(winner.prize);
                    });
                }
            }
        },
    },

    mounted() {
        window.onbeforeunload = function() {
            return "Data will be lost if you leave the page, are you sure?";
        };
    },
}).mount('#app')