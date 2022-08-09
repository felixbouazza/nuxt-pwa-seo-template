<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center justify-center text-justify px-6 space-y-4 lg:w-5/6 xl:w-4/6">
        <h1 class="text-3xl text-center">Bienvenue sur CosmosDocs.io !</h1>
        <div class="space-y-4">
          <p><strong>CosmosDocs</strong> est un site proposant de la documentation, de la vulgarisation et de l'actualité sur l'écosystème Cosmos (ATOM). Le site est en ligne depuis le mois d'Août 2022 et compte à ce jour 6 collaborateurs / développeurs / rédacteurs.</p>
          <p>Nous essayons sur ce site de proposer du contenu simple, accessible et surtout gratuit ! Dans l'objectif d'étendre le périmètre de l'écosystème Cosmos à la communauté francophone.</p>
        </div>
        <div class="space-y-4">
          <p>Pour chaque blockchain, vous retrouverez:</p>
          <ul class="space-y-4 ml-8 list-disc">
            <li>Un canal <strong>Actualité</strong>: Relayant les infos et news les plus croustillantes du moment.</li>
            <li>Un canal <strong>Gouvernance</strong>: Sur lequel nous essayons de traduire et vulgariser les votes de gouvernances des cryptomonnaies.</li>
            <li>Un canal <strong>Airdrop</strong>: Qui ne sera pas forcèment présent sur toutes les cryptomonnaies, car les airdrops sont généralement donnés à la mise en place du Token. Mais qui pourra contenir les airdrops pour lequel posséder et/ou staker le token peut amener à une éligibilité.</li>
            <li>Un canal <strong>Staking</strong>: Comprenant les news et données relatives au staking (Validateurs, Rendement, APY, etc).</li>
          </ul>
        </div>
        <div class="space-y-4">
          <p>Voici ce que vous devez savoir avant de démarrer :</p>
          <ol class="list-decimal ml-8 space-y-4">
            <li>Vous pouvez <a href="https://www.01net.com/astuces/comment-installer-une-version-allegee-de-vos-programmes-preferes-sur-iphone-et-android-1566932.html">installer le site comme une application mobile (PWA)</a></li>
            <li>Ouvrez les paramètres pour customiser votre interface ( DarkMode / LightMode ).</li>
            <li>Vous pouvez ajouter des cryptomonnaies en "Favoris" depuis les paramètres, les favoris apparaîtront en premier dans votre barre de navigation.</li>
            <li>Pour chercher une cryptomonnaie, tapez son nom dans la barre de recherche.</li>
            <li>Vous pouvez suivre <a href="https://twitter.com/Cosmosdocs">@CosmosDocs</a> sur les réseaux.</li>
            <li>CosmosDocs et son équipe sont indépendants, nous ne vous inciterons donc jamais à l'achat et la vente d'une cryptomonnaie.</li>
            <li>Pour toute question, l'équipe est disponible via Twitter ou par email à <a HREF="mailto:cosmosdocs@protonmail.com">cosmosdocs@protonmail.com</a>.</li>
          </ol>
      </div>
      <p>Si tu aimes le concept, notre contenu et que tu souhaites soutenir notre travail et le voir évoluer :</p>
      <button class="mx-auto bg-green-400 rounded py-3 px-3 text-white font-bold">BUY ME A COFFEE !</button>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `${process.env.WEBSITE_URL || "http://localhost:4500"}`,
        },
      ]
    }
  }
}
</script>

<style scoped>
a {
  color: #3377c0;
}

</style>
