import AOS from 'aos';

AOS.init({
  duration: 800,
  once: true
});

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();
