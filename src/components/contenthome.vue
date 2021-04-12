<template>
  <div class="homee">
    <div class="contentText">
      <h1>BIENVENUE SUR VOTRE SITE METEO EN DIRECT</h1>
    </div>
    <img
      class="contentImage"
      src="https://resize.prod.docfr.doc-media.fr/rcrop/600,315,center-middle/img/var/doctissimo/storage/images/fr/www/sante/diaporamas/les-maladies-qui-s-ameliorent-avec-le-soleil/3035396-3-fre-FR/Les-maladies-qui-s-ameliorent-avec-le-soleil.jpg"
      alt=""
    />
    <img
      class="contentImage"
      src="https://static.actu.fr/uploads/2019/11/neige-nord-pas-calais.jpg"
      alt=""
    />
    <img
      class="contentImage"
      src="https://www.lacanau.fr/wp-content/uploads/2020/05/pluie.jpg"
      alt=""
    />
    <img
      class="contentImage"
      src="https://www.meteocontact.fr/uploads/cours/lightning.jpg"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Contenthome",
  components: {},
};
</script>
<style scoped>
.homee {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  margin-top: 0px;
}
.contentImage {
  width: 40%;
  height: 40%;
  margin: 5px;
  display: flex;
  position: relative;
  z-index: 1;
}
.contentText {
  z-index: 3;
  position: absolute;
  background-color: rgba(96, 113, 145, 0.2);
  height: 82%;
  width: 80%;
  color: white;
  font-weight: bold;
  align-items: center;
  display: flex;
  font-size: 40px;
  text-align: center;
}
</style>
