<template>
  <div class="user-list-component">
        <main>
            <h2 id="header">Video Game Personalities</h2>
            <section v-show="showUsers">
              <ul id="user-list">
                <li :key="i" v-for="(user, i) in users">{{ user.username }}
                    <img :src="user.thumbnail"></li>
              </ul>
            </section>
        </main>


      <label class="user-list-component--toggle">
      <input type="checkbox" id="toggle" @click="toggleState">
      <span class="user-list-component--toggle__slider user-list-component--toggle__round"></span>
    </label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showUsers: false,
      users: []
    }
  },
  methods: {
    toggleState: function() {
      let component = document.querySelector('.user-list-component');

      if (toggle.checked == true) {
        this.fetchData();
        component.style.height = '50vh';
        this.showUsers = true;
      }
      else {
        component.style.height = "10vh";
        this.showUsers = false;
      }
    },
    fetchData() {
      if (!this.users[0]) {
        fetch('http://localhost:3001/api/users/')
          .then(response => {
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              this.users.push(data[key]);
            }
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-list-component--toggle {
      position: relative;
      display: inline-block;
      width: 34px;
      height: 60px;
    }

    .user-list-component--toggle input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .user-list-component--toggle__slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      -webkit-transition: .4s;
      transition: .4s;
    }

    .user-list-component--toggle__slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }

    input:checked + .user-list-component--toggle__slider {
      background-color: #00667f;
    }

    input:focus + .user-list-component--toggle__slider {
      box-shadow: 0 0 1px #00667f;
    }

    input:checked + .user-list-component--toggle__slider:before {
      -webkit-transform: translateY(-26px);
      -ms-transform: translateY(-26px);
      transform: translateY(-26px);
    }

    .user-list-component--toggle__round {
      border-radius: 34px;
    }

    .user-list-component--toggle__round:before {
      border-radius: 50%;
    }
    .user-list-component {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      background-color: rgba(165, 216, 103, 0.3);
      max-width: 500px;
      min-height: 70px;
      border: 2px solid #a5d867;  border-radius: 2em;
      font-family: 'Lato', Helvetica, Arial, sans-serif;
      font-weight: 700;
      transition: height 1s;
      -webkit-transition: height 1s;
      overflow: hidden;
    }

    .user-list-component-open {
      height: 50vh;
    }

    body {
        max-width: 1200px;
    }

    img {
        width: 20px;
        margin: 5px 0px 0px 10px;
        border-radius: 50%;
    }

    ul {
        font-weight: 500;
        list-style-type: none;
        transition: opacity 5s;
    }
</style>
