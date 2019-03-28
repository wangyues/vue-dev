<template>
  <div>
    <hr/>
    <div>
      <button v-on:click="apptoken">AppToken</button>
      <input type="text" style="width:100px" v-model="request.appName" placeholder="appName" />
      <input type="text" style="width:600px" v-model="response.appToken" placeholder="appToken" onfocus="this.select()"/>
      <br/>
      <button v-on:click="siteinfo">SiteInfo</button>
      <input type="text" style="width:100px" v-model="request.siteName" placeholder="siteName" />
      <input type="text" style="width:600px" v-model="response.siteInfo" placeholder="siteInfo" onfocus="this.select()"/>
    </div>
    <hr/>
  </div>
</template>

<script>

export default {
  name: 'BlogLogin',
  data () {
    return {
      loginInfoVo: { username: '', password: '' },
      request: {
        appName: "APP_ADDIN",
        siteName: "https://gohm.qa.webex.com"
      },
      response: {
        appName: "",
        appToken: "",
        siteInfo: ""
      }
    }
  },
  methods: {
    apptoken() {
      this.gohttp
        .get('/apptoken', {
          params: {
            appName: this.request.appName
        }})
        .then(succRresult => {
          if (succRresult.data.code === 200) {
            this.response.appToken = succRresult.data.data;
          } else {
            this.response.appToken = succRresult.data.message;
          }
        })
        .catch(failResult => {
          this.response.appToken = "request failed";
        })
    },

    siteinfo() {
      this.gohttp
        .get('/site', {
          params: {
            site: this.request.siteName
          }})
        .then(succRresult => {
          if (succRresult.data.code === 200) {
            this.response.siteInfo = JSON.stringify(succRresult.data.data);
          } else {
            this.response.siteInfo = succRresult.data.message;
          }
        })
        .catch(failResult => {
          this.response.siteInfo = "request failed";
        })
    }
  }
}
</script>
