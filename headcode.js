<script>
/* For form modal zoom prevention */
document.addEventListener('gesturestart', function(e) {
  e.preventDefault();
  return false;
}, { passive: false });

document.addEventListener('touchmove', function(e) {
  if (e.scale !== 1 && e.scale !== undefined) {
    e.preventDefault();
  }
}, { passive: false });
</script>




<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KD3VSJQ');</script>
<!-- End Google Tag Manager -->




<!-- [Attributes by Finsweet] Disable scrolling -->
<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js"></script>




<script>
/* Refresh to page top and prevent jump on BG video load */
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
</script>
