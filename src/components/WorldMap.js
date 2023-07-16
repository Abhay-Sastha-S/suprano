import React from 'react'

const ref = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Map</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }
    body {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-x: hidden;
}

svg {
  width: 80%;
}

circle {
  fill: #cbc9c9cb;
  margin: 10px;
  padding: 10px;
}

/* circle, */

.pin {
  fill: rgb(248,209,76);
  z-index: 10;
  transition: 1s;
  margin: 10px;
}

.st0 .pin {
  fill: rgb(248,209,76);
  transition: transform 0.3s;
}

/* .st0.pin:hover {
  transform: scale(1.5); /* Increase the scale to enlarge the circle */
.banaan {
  fill: #f8d14c;
  transition: all 2s ease;
  box-shadow: 0 0 0 0 rgba(248,209,76, 0.7);
  animation: pulse 1.25s infinite;
}

@keyframes pulse {
  to {
    r: 8;
  }
}
.div {
  width:96%;
  position: absolute;
  top: 0;
  left:50%;
  transform: translateX(-50%);
  color: white;
  transition: 1.5s;
}
.div div{
  display:flex;
  opacity: 0;
  filter: blur(5px);
  width:100%;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
}
.div div span{
  height:5vh;
}
.one {
  opacity: 0;
}
.two {
  opacity: 0;
}
span {
  margin: 0.5rem;
  font-size: 1.4rem;
  font-family: "Poppins";
  transition: 0.5s;
}

</style>
<body>
    <div class="div">
    <div id="div1">
        <span id="itly">Italy</span><span id="spn">Spain</span><span id="grm">Germany</span
        ><span id="isrl">Israel</span><span id="fra">France</span><span id="uk">UK</span><span id="swt">Switzerland</span><span id="gre">Greece</span><span id="neth">Netherland</span><span id="pol">Poland</span><span id="ind">India</span>
      </div>
    </div>
    <div class="div">
      <div id="div2">
        <span id="saf">South Africa</span><span id="bra">Brazil</span
        ><span id="sig">Singapore</span><span id="jor">Jordan</span><span id="thi">Thailand</span><span id="vie">Vietnam</span><span id="fin">Finland</span><span id="egy">Egypt</span><span id="rus">Russia</span><span id="uae">UAE</span><span id="nor">Norway</span><span id="den">Denmark</span><span id="aus">Austria</span><span id="bel">Belgium</span>
      </div>
    </div>
      <svg viewBox="0 0 845.2 458">
        <circle class="st0" cx="826.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="819.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="819.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="812.6" cy="90" r="1.0" />
        <circle class="st0" cx="812.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="812.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="805.8" cy="90" r="1.0" />
        <circle class="st0" cx="805.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="805.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="805.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="805.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="805.8" cy="381.6" r="1.0" />
        <circle class="st0" cx="799" cy="96.7" r="1.0" />
        <circle class="st0" cx="799" cy="103.5" r="1.0" />
        <circle class="st0" cx="799" cy="110.3" r="1.0" />
        <circle class="st0" cx="799" cy="117.1" r="1.0" />
        <circle class="st0" cx="799" cy="123.9" r="1.0" />
        <circle class="st0" cx="799" cy="374.8" r="1.0" />
        <circle class="st0" cx="799" cy="381.6" r="1.0" />
        <circle class="st0" cx="799" cy="388.4" r="1.0" />
        <circle class="st0" cx="792.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="792.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="792.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="792.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="792.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="792.2" cy="368" r="1.0" />
        <circle class="st0" cx="792.2" cy="374.8" r="1.0" />
        <circle class="st0" cx="792.2" cy="381.6" r="1.0" />
        <circle class="st0" cx="792.2" cy="388.4" r="1.0" />
        <circle class="st0" cx="792.2" cy="395.2" r="1.0" />
        <circle class="st0" cx="785.4" cy="96.7" r="1.0" />
        <circle class="st0" cx="785.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="785.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="785.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="785.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="785.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="785.4" cy="395.2" r="1.0" />
        <circle class="st0" cx="785.4" cy="402" r="1.0" />
        <circle class="st0" cx="778.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="778.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="778.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="778.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="778.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="778.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="778.7" cy="334.1" r="1.0" />
        <circle class="st0" cx="778.7" cy="340.9" r="1.0" />
        <circle class="st0" cx="778.7" cy="395.2" r="1.0" />
        <circle class="st0" cx="778.7" cy="402" r="1.0" />
        <circle class="st0" cx="771.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="771.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="771.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="771.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="771.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="771.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="771.9" cy="334.1" r="1.0" />
        <circle class="st0" cx="771.9" cy="340.9" r="1.0" />
        <circle class="st0" cx="765.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="765.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="765.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="765.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="765.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="765.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="765.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="765.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="765.1" cy="151" r="1.0" />
        <circle class="st0" cx="758.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="758.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="758.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="758.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="758.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="758.3" cy="137.4" r="1.0" />
        <circle class="st0" cx="758.3" cy="144.2" r="1.0" />
        <circle class="st0" cx="758.3" cy="151" r="1.0" />
        <circle class="st0" cx="758.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="758.3" cy="307" r="1.0" />
        <circle class="st0" cx="751.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="751.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="751.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="751.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="751.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="751.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="751.5" cy="151" r="1.0" />
        <circle class="st0" cx="751.5" cy="307" r="1.0" />
        <circle class="st0" cx="744.7" cy="90" r="1.0" />
        <circle class="st0" cx="744.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="744.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="744.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="744.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="744.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="744.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="744.7" cy="300.2" r="1.0" />
        <circle class="st0" cx="744.7" cy="347.7" r="1.0" />
        <circle class="st0" cx="744.7" cy="354.5" r="1.0" />
        <circle class="st0" cx="744.7" cy="361.3" r="1.0" />
        <circle class="st0" cx="738" cy="76.4" r="1.0" />
        <circle class="st0" cx="738" cy="90" r="1.0" />
        <circle class="st0" cx="738" cy="96.7" r="1.0" />
        <circle class="st0" cx="738" cy="103.5" r="1.0" />
        <circle class="st0" cx="738" cy="110.3" r="1.0" />
        <circle class="st0" cx="738" cy="117.1" r="1.0" />
        <circle class="st0" cx="738" cy="123.9" r="1.0" />
        <circle class="st0" cx="738" cy="130.7" r="1.0" />
        <circle class="st0" cx="738" cy="300.2" r="1.0" />
        <circle class="st0" cx="738" cy="313.8" r="1.0" />
        <circle class="st0" cx="738" cy="340.9" r="1.0" />
        <circle class="st0" cx="738" cy="347.7" r="1.0" />
        <circle class="st0" cx="738" cy="354.5" r="1.0" />
        <circle class="st0" cx="738" cy="361.3" r="1.0" />
        <circle class="st0" cx="738" cy="368" r="1.0" />
        <circle class="st0" cx="738" cy="374.8" r="1.0" />
        <circle class="st0" cx="731.2" cy="76.4" r="1.0" />
        <circle class="st0" cx="731.2" cy="90" r="1.0" />
        <circle class="st0" cx="731.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="731.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="731.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="731.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="731.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="731.2" cy="130.7" r="1.0" />
        <circle class="st0" cx="731.2" cy="300.2" r="1.0" />
        <circle class="st0" cx="731.2" cy="307" r="1.0" />
        <circle class="st0" cx="731.2" cy="327.3" r="1.0" />
        <circle class="st0" cx="731.2" cy="334.1" r="1.0" />
        <circle class="st0" cx="731.2" cy="340.9" r="1.0" />
        <circle class="st0" cx="731.2" cy="347.7" r="1.0" />
        <circle class="st0" cx="731.2" cy="354.5" r="1.0" />
        <circle class="st0" cx="731.2" cy="361.3" r="1.0" />
        <circle class="st0" cx="731.2" cy="368" r="1.0" />
        <circle class="st0" cx="731.2" cy="374.8" r="1.0" />
        <circle class="st0" cx="731.2" cy="381.6" r="1.0" />
        <circle class="st0" cx="731.2" cy="388.4" r="1.0" />
        <circle class="st0" cx="724.4" cy="69.6" r="1.0" />
        <circle class="st0" cx="724.4" cy="76.4" r="1.0" />
        <circle class="st0" cx="724.4" cy="83.2" r="1.0" />
        <circle class="st0" cx="724.4" cy="90" r="1.0" />
        <circle class="st0" cx="724.4" cy="96.7" r="1.0" />
        <circle class="st0" cx="724.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="724.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="724.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="724.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="724.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="724.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="724.4" cy="164.6" r="1.0" />
        <circle class="st0" cx="724.4" cy="171.3" r="1.0" />
        <circle class="st0" cx="724.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="724.4" cy="184.9" r="1.0" />
        <circle class="st0" cx="724.4" cy="300.2" r="1.0" />
        <circle class="st0" cx="724.4" cy="307" r="1.0" />
        <circle class="st0" cx="724.4" cy="320.6" r="1.0" />
        <circle class="st0" cx="724.4" cy="327.3" r="1.0" />
        <circle class="st0" cx="724.4" cy="334.1" r="1.0" />
        <circle class="st0" cx="724.4" cy="340.9" r="1.0" />
        <circle class="st0" cx="724.4" cy="347.7" r="1.0" />
        <circle class="st0" cx="724.4" cy="354.5" r="1.0" />
        <circle class="st0" cx="724.4" cy="361.3" r="1.0" />
        <circle class="st0" cx="724.4" cy="368" r="1.0" />
        <circle class="st0" cx="724.4" cy="374.8" r="1.0" />
        <circle class="st0" cx="724.4" cy="381.6" r="1.0" />
        <circle class="st0" cx="717.6" cy="69.6" r="1.0" />
        <circle class="st0" cx="717.6" cy="76.4" r="1.0" />
        <circle class="st0" cx="717.6" cy="83.2" r="1.0" />
        <circle class="st0" cx="717.6" cy="90" r="1.0" />
        <circle class="st0" cx="717.6" cy="96.7" r="1.0" />
        <circle class="st0" cx="717.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="717.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="717.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="717.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="717.6" cy="130.7" r="1.0" />
        <circle class="st0" cx="717.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="717.6" cy="151" r="1.0" />
        <circle class="st0" cx="717.6" cy="157.8" r="1.0" />
        <circle class="st0" cx="717.6" cy="164.6" r="1.0" />
        <circle class="st0" cx="717.6" cy="171.3" r="1.0" />
        <circle class="st0" cx="717.6" cy="178.1" r="1.0" />
        <circle class="st0" cx="717.6" cy="184.9" r="1.0" />
        <circle class="st0" cx="717.6" cy="191.7" r="1.0" />
        <circle class="st0" cx="717.6" cy="198.5" r="1.0" />
        <circle class="st0" cx="717.6" cy="205.3" r="1.0" />
        <circle class="st0" cx="717.6" cy="293.4" r="1.0" />
        <circle class="st0" cx="717.6" cy="300.2" r="1.0" />
        <circle class="st0" cx="717.6" cy="307" r="1.0" />
        <circle class="st0" cx="717.6" cy="327.3" r="1.0" />
        <circle class="st0" cx="717.6" cy="334.1" r="1.0" />
        <circle class="st0" cx="717.6" cy="340.9" r="1.0" />
        <circle class="st0" cx="717.6" cy="347.7" r="1.0" />
        <circle class="st0" cx="717.6" cy="354.5" r="1.0" />
        <circle class="st0" cx="717.6" cy="361.3" r="1.0" />
        <circle class="st0" cx="717.6" cy="368" r="1.0" />
        <circle class="st0" cx="717.6" cy="374.8" r="1.0" />
        <circle class="st0" cx="710.8" cy="69.6" r="1.0" />
        <circle class="st0" cx="710.8" cy="76.4" r="1.0" />
        <circle class="st0" cx="710.8" cy="90" r="1.0" />
        <circle class="st0" cx="710.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="710.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="710.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="710.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="710.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="710.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="710.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="710.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="710.8" cy="151" r="1.0" />
        <circle class="st0" cx="710.8" cy="157.8" r="1.0" />
        <circle class="st0" cx="710.8" cy="164.6" r="1.0" />
        <circle class="st0" cx="710.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="710.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="710.8" cy="198.5" r="1.0" />
        <circle class="st0" cx="710.8" cy="205.3" r="1.0" />
        <circle class="st0" cx="710.8" cy="293.4" r="1.0" />
        <circle class="st0" cx="710.8" cy="300.2" r="1.0" />
        <circle class="st0" cx="710.8" cy="307" r="1.0" />
        <circle class="st0" cx="710.8" cy="327.3" r="1.0" />
        <circle class="st0" cx="710.8" cy="334.1" r="1.0" />
        <circle class="st0" cx="710.8" cy="340.9" r="1.0" />
        <circle class="st0" cx="710.8" cy="347.7" r="1.0" />
        <circle class="st0" cx="710.8" cy="354.5" r="1.0" />
        <circle class="st0" cx="710.8" cy="361.3" r="1.0" />
        <circle class="st0" cx="710.8" cy="368" r="1.0" />
        <circle class="st0" cx="704" cy="90" r="1.0" />
        <circle class="st0" cx="704" cy="96.7" r="1.0" />
        <circle class="st0" cx="704" cy="103.5" r="1.0" />
        <circle class="st0" cx="704" cy="110.3" r="1.0" />
        <circle class="st0" cx="704" cy="117.1" r="1.0" />
        <circle class="st0" cx="704" cy="123.9" r="1.0" />
        <circle class="st0" cx="704" cy="130.7" r="1.0" />
        <circle class="st0" cx="704" cy="137.4" r="1.0" />
        <circle class="st0" cx="704" cy="144.2" r="1.0" />
        <circle class="st0" cx="704" cy="151" r="1.0" />
        <circle class="st0" cx="704" cy="157.8" r="1.0" />
        <circle class="st0" cx="704" cy="164.6" r="1.0" />
        <circle class="st0" cx="704" cy="171.3" r="1.0" />
        <circle class="st0" cx="704" cy="178.1" r="1.0" />
        <circle class="st0" cx="704" cy="184.9" r="1.0" />
        <circle class="st0" cx="704" cy="205.3" r="1.0" />
        <circle class="st0" cx="704" cy="293.4" r="1.0" />
        <circle class="st0" cx="704" cy="300.2" r="1.0" />
        <circle class="st0" cx="704" cy="307" r="1.0" />
        <circle class="st0" cx="704" cy="320.6" r="1.0" />
        <circle class="st0" cx="704" cy="327.3" r="1.0" />
        <circle class="st0" cx="704" cy="334.1" r="1.0" />
        <circle class="st0" cx="704" cy="340.9" r="1.0" />
        <circle class="st0" cx="704" cy="347.7" r="1.0" />
        <circle class="st0" cx="704" cy="354.5" r="1.0" />
        <circle class="st0" cx="704" cy="361.3" r="1.0" />
        <circle class="st0" cx="704" cy="368" r="1.0" />
        <circle class="st0" cx="697.3" cy="90" r="1.0" />
        <circle class="st0" cx="697.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="697.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="697.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="697.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="697.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="697.3" cy="130.7" r="1.0" />
        <circle class="st0" cx="697.3" cy="137.4" r="1.0" />
        <circle class="st0" cx="697.3" cy="144.2" r="1.0" />
        <circle class="st0" cx="697.3" cy="151" r="1.0" />
        <circle class="st0" cx="697.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="697.3" cy="164.6" r="1.0" />
        <circle class="st0" cx="697.3" cy="171.3" r="1.0" />
        <circle class="st0" cx="697.3" cy="178.1" r="1.0" />
        <circle class="st0" cx="697.3" cy="184.9" r="1.0" />
        <circle class="st0" cx="697.3" cy="205.3" r="1.0" />
        <circle class="st0" cx="697.3" cy="212" r="1.0" />
        <circle class="st0" cx="697.3" cy="218.8" r="1.0" />
        <circle class="st0" cx="697.3" cy="293.4" r="1.0" />
        <circle class="st0" cx="697.3" cy="307" r="1.0" />
        <circle class="st0" cx="697.3" cy="313.8" r="1.0" />
        <circle class="st0" cx="697.3" cy="320.6" r="1.0" />
        <circle class="st0" cx="697.3" cy="327.3" r="1.0" />
        <circle class="st0" cx="697.3" cy="334.1" r="1.0" />
        <circle class="st0" cx="697.3" cy="340.9" r="1.0" />
        <circle class="st0" cx="697.3" cy="347.7" r="1.0" />
        <circle class="st0" cx="697.3" cy="354.5" r="1.0" />
        <circle class="st0" cx="697.3" cy="361.3" r="1.0" />
        <circle class="st0" cx="690.5" cy="83.2" r="1.0" />
        <circle class="st0" cx="690.5" cy="90" r="1.0" />
        <circle class="st0" cx="690.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="690.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="690.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="690.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="690.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="690.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="690.5" cy="137.4" r="1.0" />
        <circle class="st0" cx="690.5" cy="144.2" r="1.0" />
        <circle class="st0" cx="690.5" cy="151" r="1.0" />
        <circle class="st0" cx="690.5" cy="157.8" r="1.0" />
        <circle class="st0" cx="690.5" cy="164.6" r="1.0" />
        <circle class="st0" cx="690.5" cy="171.3" r="1.0" />
        <circle class="st0" cx="690.5" cy="178.1" r="1.0" />
        <circle class="st0" cx="690.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="690.5" cy="191.7" r="1.0" />
        <circle class="st0" cx="690.5" cy="198.5" r="1.0" />
        <circle class="st0" cx="690.5" cy="205.3" r="1.0" />
        <circle class="st0" cx="690.5" cy="225.6" r="1.0" />
        <circle class="st0" cx="690.5" cy="286.6" r="1.0" />
        <circle class="st0" cx="690.5" cy="293.4" r="1.0" />
        <circle class="st0" cx="690.5" cy="320.6" r="1.0" />
        <circle class="st0" cx="690.5" cy="327.3" r="1.0" />
        <circle class="st0" cx="690.5" cy="334.1" r="1.0" />
        <circle class="st0" cx="690.5" cy="340.9" r="1.0" />
        <circle class="st0" cx="690.5" cy="347.7" r="1.0" />
        <circle class="st0" cx="690.5" cy="354.5" r="1.0" />
        <circle class="st0" cx="690.5" cy="361.3" r="1.0" />
        <circle class="st0" cx="683.7" cy="83.2" r="1.0" />
        <circle class="st0" cx="683.7" cy="90" r="1.0" />
        <circle class="st0" cx="683.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="683.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="683.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="683.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="683.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="683.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="683.7" cy="137.4" r="1.0" />
        <circle class="st0" cx="683.7" cy="144.2" r="1.0" />
        <circle class="st0" cx="683.7" cy="151" r="1.0" />
        <circle class="st0" cx="683.7" cy="157.8" r="1.0" />
        <circle class="st0" cx="683.7" cy="164.6" r="1.0" />
        <circle class="st0" cx="683.7" cy="171.3" r="1.0" />
        <circle class="st0" cx="683.7" cy="178.1" r="1.0" />
        <circle class="st0" cx="683.7" cy="184.9" r="1.0" />
        <circle class="st0" cx="683.7" cy="191.7" r="1.0" />
        <circle class="st0" cx="683.7" cy="198.5" r="1.0" />
        <circle class="st0" cx="683.7" cy="259.5" r="1.0" />
        <circle class="st0" cx="683.7" cy="266.3" r="1.0" />
        <circle class="st0" cx="683.7" cy="273.1" r="1.0" />
        <circle class="st0" cx="683.7" cy="286.6" r="1.0" />
        <circle class="st0" cx="683.7" cy="293.4" r="1.0" />
        <circle class="st0" cx="683.7" cy="300.2" r="1.0" />
        <circle class="st0" cx="683.7" cy="307" r="1.0" />
        <circle class="st0" cx="683.7" cy="320.6" r="1.0" />
        <circle class="st0" cx="683.7" cy="327.3" r="1.0" />
        <circle class="st0" cx="683.7" cy="334.1" r="1.0" />
        <circle class="st0" cx="683.7" cy="340.9" r="1.0" />
        <circle class="st0" cx="683.7" cy="347.7" r="1.0" />
        <circle class="st0" cx="683.7" cy="354.5" r="1.0" />
        <circle class="st0" cx="683.7" cy="361.3" r="1.0" />
        <circle class="st0" cx="676.9" cy="83.2" r="1.0" />
        <circle class="st0" cx="676.9" cy="90" r="1.0" />
        <circle class="st0" cx="676.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="676.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="676.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="676.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="676.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="676.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="676.9" cy="137.4" r="1.0" />
        <circle class="st0" cx="676.9" cy="144.2" r="1.0" />
        <circle class="st0" cx="676.9" cy="151" r="1.0" />
        <circle class="st0" cx="676.9" cy="157.8" r="1.0" />
        <circle class="st0" cx="676.9" cy="164.6" r="1.0" />
        <circle class="st0" cx="676.9" cy="171.3" r="1.0" />
        <circle class="st0" cx="676.9" cy="178.1" r="1.0" />
        <circle class="st0" cx="676.9" cy="184.9" r="1.0" />
        <circle class="st0" cx="676.9" cy="191.7" r="1.0" />
        <circle class="st0" cx="676.9" cy="246" r="1.0" />
        <circle class="st0" cx="676.9" cy="252.7" r="1.0" />
        <circle class="st0" cx="676.9" cy="259.5" r="1.0" />
        <circle class="st0" cx="676.9" cy="266.3" r="1.0" />
        <circle class="st0" cx="676.9" cy="273.1" r="1.0" />
        <circle class="st0" cx="676.9" cy="286.6" r="1.0" />
        <circle class="st0" cx="676.9" cy="293.4" r="1.0" />
        <circle class="st0" cx="676.9" cy="300.2" r="1.0" />
        <circle class="st0" cx="676.9" cy="307" r="1.0" />
        <circle class="st0" cx="676.9" cy="313.8" r="1.0" />
        <circle class="st0" cx="676.9" cy="327.3" r="1.0" />
        <circle class="st0" cx="676.9" cy="334.1" r="1.0" />
        <circle class="st0" cx="676.9" cy="340.9" r="1.0" />
        <circle class="st1" cx="676.9" cy="347.7" r="1.0" />
        <circle class="st0" cx="676.9" cy="354.5" r="1.0" />
        <circle class="st0" cx="676.9" cy="361.3" r="1.0" />
        <circle class="st0" cx="676.9" cy="368" r="1.0" />
        <circle class="st0" cx="670.1" cy="83.2" r="1.0" />
        <circle class="st0" cx="670.1" cy="90" r="1.0" />
        <circle class="st0" cx="670.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="670.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="670.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="670.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="670.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="670.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="670.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="670.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="670.1" cy="151" r="1.0" />
        <circle class="st0" cx="670.1" cy="157.8" r="1.0" />
        <circle class="st0" cx="670.1" cy="164.6" r="1.0" />
        <circle class="st0" cx="670.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="670.1" cy="178.1" r="1.0" />
        <circle class="st0" cx="670.1" cy="184.9" r="1.0" />
        <circle class="st0" cx="670.1" cy="191.7" r="1.0" />
        <circle class="st0" cx="670.1" cy="198.5" r="1.0" />
        <circle class="st0" cx="670.1" cy="205.3" r="1.0" />
        <circle class="st0" cx="670.1" cy="212" r="1.0" />
        <circle class="st0" cx="670.1" cy="218.8" r="1.0" />
        <circle class="st0" cx="670.1" cy="225.6" r="1.0" />
        <circle class="st0" cx="670.1" cy="232.4" r="1.0" />
        <circle class="st0" cx="670.1" cy="246" r="1.0" />
        <circle class="st0" cx="670.1" cy="252.7" r="1.0" />
        <circle class="st0" cx="670.1" cy="259.5" r="1.0" />
        <circle class="st0" cx="670.1" cy="286.6" r="1.0" />
        <circle class="st0" cx="670.1" cy="293.4" r="1.0" />
        <circle class="st0" cx="670.1" cy="300.2" r="1.0" />
        <circle class="st0" cx="670.1" cy="307" r="1.0" />
        <circle class="st0" cx="670.1" cy="313.8" r="1.0" />
        <circle class="st0" cx="670.1" cy="327.3" r="1.0" />
        <circle class="st0" cx="670.1" cy="334.1" r="1.0" />
        <circle class="st0" cx="670.1" cy="340.9" r="1.0" />
        <circle class="st0" cx="670.1" cy="347.7" r="1.0" />
        <circle class="st0" cx="670.1" cy="354.5" r="1.0" />
        <circle class="st0" cx="670.1" cy="361.3" r="1.0" />
        <circle class="st0" cx="670.1" cy="368" r="1.0" />
        <circle class="st0" cx="663.4" cy="83.2" r="1.0" />
        <circle class="st0" cx="663.4" cy="90" r="1.0" />
        <circle class="st0" cx="663.4" cy="96.7" r="1.0" />
        <circle class="st0" cx="663.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="663.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="663.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="663.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="663.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="663.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="663.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="663.4" cy="151" r="1.0" />
        <circle class="st0" cx="663.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="663.4" cy="164.6" r="1.0" />
        <circle class="st0" cx="663.4" cy="171.3" r="1.0" />
        <circle class="st0" cx="663.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="663.4" cy="184.9" r="1.0" />
        <circle class="st0" cx="663.4" cy="191.7" r="1.0" />
        <circle class="st0" cx="663.4" cy="198.5" r="1.0" />
        <circle class="st0" cx="663.4" cy="205.3" r="1.0" />
        <circle class="st0" cx="663.4" cy="212" r="1.0" />
        <circle class="st0" cx="663.4" cy="218.8" r="1.0" />
        <circle class="st0" cx="663.4" cy="225.6" r="1.0" />
        <circle class="st0" cx="663.4" cy="232.4" r="1.0" />
        <circle class="st0" cx="663.4" cy="273.1" r="1.0" />
        <circle class="st0" cx="663.4" cy="279.9" r="1.0" />
        <circle class="st0" cx="663.4" cy="286.6" r="1.0" />
        <circle class="st0" cx="663.4" cy="293.4" r="1.0" />
        <circle class="st0" cx="663.4" cy="307" r="1.0" />
        <circle class="st0" cx="663.4" cy="340.9" r="1.0" />
        <circle class="st0" cx="663.4" cy="347.7" r="1.0" />
        <circle class="st0" cx="663.4" cy="354.5" r="1.0" />
        <circle class="st0" cx="663.4" cy="361.3" r="1.0" />
        <circle class="st0" cx="663.4" cy="368" r="1.0" />
        <circle class="st0" cx="656.6" cy="69.6" r="1.0" />
        <circle class="st0" cx="656.6" cy="76.4" r="1.0" />
        <circle class="st0" cx="656.6" cy="83.2" r="1.0" />
        <circle class="st0" cx="656.6" cy="90" r="1.0" />
        <circle class="st0" cx="656.6" cy="96.7" r="1.0" />
        <circle class="st0" cx="656.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="656.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="656.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="656.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="656.6" cy="130.7" r="1.0" />
        <circle class="st0" cx="656.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="656.6" cy="144.2" r="1.0" />
        <circle class="st0" cx="656.6" cy="151" r="1.0" />
        <circle class="st0" cx="656.6" cy="157.8" r="1.0" />
        <circle class="st0" cx="656.6" cy="164.6" r="1.0" />
        <circle class="st0" cx="656.6" cy="171.3" r="1.0" />
        <circle class="st0" cx="656.6" cy="178.1" r="1.0" />
        <circle class="st0" cx="656.6" cy="184.9" r="1.0" />
        <circle class="st0" cx="656.6" cy="191.7" r="1.0" />
        <circle class="st0" cx="656.6" cy="198.5" r="1.0" />
        <circle class="st0" cx="656.6" cy="205.3" r="1.0" />
        <circle class="st0" cx="656.6" cy="212" r="1.0" />
        <circle class="st0" cx="656.6" cy="218.8" r="1.0" />
        <circle class="st0" cx="656.6" cy="225.6" r="1.0" />
        <circle class="st0" cx="656.6" cy="232.4" r="1.0" />
        <circle class="st0" cx="656.6" cy="279.9" r="1.0" />
        <circle class="st0" cx="656.6" cy="286.6" r="1.0" />
        <circle class="st0" cx="656.6" cy="293.4" r="1.0" />
        <circle class="st0" cx="656.6" cy="307" r="1.0" />
        <circle class="st0" cx="656.6" cy="340.9" r="1.0" />
        <circle class="st0" cx="656.6" cy="347.7" r="1.0" />
        <circle class="st0" cx="656.6" cy="354.5" r="1.0" />
        <circle class="st0" cx="649.8" cy="69.6" r="1.0" />
        <circle class="st0" cx="649.8" cy="76.4" r="1.0" />
        <circle class="st0" cx="649.8" cy="83.2" r="1.0" />
        <circle class="st0" cx="649.8" cy="90" r="1.0" />
        <circle class="st0" cx="649.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="649.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="649.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="649.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="649.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="649.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="649.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="649.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="649.8" cy="151" r="1.0" />
        <circle class="st0" cx="649.8" cy="157.8" r="1.0" />
        <circle class="st0" cx="649.8" cy="164.6" r="1.0" />
        <circle class="st0" cx="649.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="649.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="649.8" cy="184.9" r="1.0" />
        <circle class="st0" cx="649.8" cy="191.7" r="1.0" />
        <circle class="st0" cx="649.8" cy="198.5" r="1.0" />
        <circle class="st0" cx="649.8" cy="205.3" r="1.0" />
        <circle class="st0" cx="649.8" cy="212" r="1.0" />
        <circle class="st0" cx="649.8" cy="218.8" r="1.0" />
        <circle class="st0" cx="649.8" cy="225.6" r="1.0" />
        <circle class="st0" cx="649.8" cy="232.4" r="1.0" />
        <circle class="st0" cx="649.8" cy="239.2" r="1.0" />
        <circle class="st0" cx="649.8" cy="246" r="1.0" />
        <circle class="st0" cx="649.8" cy="286.6" r="1.0" />
        <circle class="st0" cx="649.8" cy="293.4" r="1.0" />
        <circle class="st0" cx="649.8" cy="307" r="1.0" />
        <circle class="st0" cx="643" cy="69.6" r="1.0" />
        <circle class="st0" cx="643" cy="76.4" r="1.0" />
        <circle class="st0" cx="643" cy="83.2" r="1.0" />
        <circle class="st0" cx="643" cy="90" r="1.0" />
        <circle class="st0" cx="643" cy="96.7" r="1.0" />
        <circle class="st0 pin two" cx="643" cy="103.5" r="4.9" data-country="rus"/>
        <circle class="st0" cx="643" cy="110.3" r="1.0" />
        <circle class="st0" cx="643" cy="117.1" r="1.0" />
        <circle class="st0" cx="643" cy="123.9" r="1.0" />
        <circle class="st0" cx="643" cy="130.7" r="1.0" />
        <circle class="st0" cx="643" cy="137.4" r="1.0" />
        <circle class="st0" cx="643" cy="144.2" r="1.0" />
        <circle class="st0" cx="643" cy="151" r="1.0" />
        <circle class="st0" cx="643" cy="157.8" r="1.0" />
        <circle class="st0" cx="643" cy="164.6" r="1.0" />
        <circle class="st0" cx="643" cy="171.3" r="1.0" />
        <circle class="st0" cx="643" cy="178.1" r="1.0" />
        <circle class="st0" cx="643" cy="184.9" r="1.0" />
        <circle class="st0" cx="643" cy="191.7" r="1.0" />
        <circle class="st0" cx="643" cy="198.5" r="1.0" />
        <circle class="st0" cx="643" cy="205.3" r="1.0" />
        <circle class="st0" cx="643" cy="212" r="1.0" />
        <circle class="st0" cx="643" cy="218.8" r="1.0" />
        <circle class="st0" cx="643" cy="225.6" r="1.0" />
        <circle class="st0" cx="643" cy="232.4" r="1.0" />
        <circle class="st0" cx="643" cy="239.2" r="1.0" />
        <circle class="st0" cx="643" cy="252.7" r="1.0" />
        <circle
          class="st0"
          cx="643"
          cy="259.5"
          r="1.0"
        />
        <circle class="st0" cx="643" cy="300.2" r="1.0" />
        <circle class="st0" cx="643" cy="307" r="1.0" />
        <circle class="st0" cx="636.2" cy="56" r="1.0" />
        <circle class="st0" cx="636.2" cy="62.8" r="1.0" />
        <circle class="st0" cx="636.2" cy="69.6" r="1.0" />
        <circle class="st0" cx="636.2" cy="76.4" r="1.0" />
        <circle class="st0" cx="636.2" cy="83.2" r="1.0" />
        <circle class="st0" cx="636.2" cy="90" r="1.0" />
        <circle class="st0" cx="636.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="636.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="636.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="636.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="636.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="636.2" cy="130.7" r="1.0" />
        <circle class="st0" cx="636.2" cy="137.4" r="1.0" />
        <circle class="st0" cx="636.2" cy="144.2" r="1.0" />
        <circle class="st0" cx="636.2" cy="151" r="1.0" />
        <circle class="st0" cx="636.2" cy="157.8" r="1.0" />
        <circle class="st0" cx="636.2" cy="164.6" r="1.0" />
        <circle class="st0" cx="636.2" cy="171.3" r="1.0" />
        <circle class="st0" cx="636.2" cy="178.1" r="1.0" />
        <circle class="st0" cx="636.2" cy="184.9" r="1.0" />
        <circle class="st0" cx="636.2" cy="191.7" r="1.0" />
        <circle class="st0" cx="636.2" cy="198.5" r="1.0" />
        <circle class="st0" cx="636.2" cy="205.3" r="1.0" />
        <circle class="st0" cx="636.2" cy="212" r="1.0" />
        <circle class="st0" cx="636.2" cy="218.8" r="1.0" />
        <circle class="st0" cx="636.2" cy="225.6" r="1.0" />
        <circle class="st0" cx="636.2" cy="232.4" r="1.0" />
        <circle class="st0" cx="636.2" cy="239.2" r="1.0" />
        <circle class="st0" cx="636.2" cy="246" r="1.0" />
        <circle class="st0" cx="636.2" cy="252.7" r="1.0" />
        <circle class="st0 pin two" cx="636.2" cy="259.5" r="4.9" data-country="vie"/>
        <circle class="st0" cx="636.2" cy="266.3" r="1.0" />
        <circle class="st0" cx="636.2" cy="279.9" r="1.0"/>
        <circle class="st0" cx="636.2" cy="286.6" r="1.0" />
        <circle class="st0 pin two" cx="636.2" cy="293.4" r="4.9" data-country="sig"/>
        <circle class="st0" cx="636.2" cy="300.2" r="1.0" />
        <circle class="st0" cx="629.4" cy="56" r="1.0" />
        <circle class="st0" cx="629.4" cy="62.8" r="1.0" />
        <circle class="st0" cx="629.4" cy="69.6" r="1.0" />
        <circle class="st0" cx="629.4" cy="76.4" r="1.0" />
        <circle class="st0" cx="629.4" cy="83.2" r="1.0" />
        <circle class="st0" cx="629.4" cy="90" r="1.0" />
        <circle class="st0" cx="629.4" cy="96.7" r="1.0" />
        <circle class="st1" cx="629.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="629.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="629.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="629.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="629.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="629.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="629.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="629.4" cy="151" r="1.0" />
        <circle class="st0" cx="629.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="629.4" cy="164.6" r="1.0" />
        <circle class="st0" cx="629.4" cy="171.3" r="1.0" />
        <circle class="st0" cx="629.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="629.4" cy="184.9" r="1.0" />
        <circle class="st0" cx="629.4" cy="191.7" r="1.0" />
        <circle class="st0" cx="629.4" cy="198.5" r="1.0" />
        <circle class="st0" cx="629.4" cy="205.3" r="1.0" />
        <circle class="st0" cx="629.4" cy="212" r="1.0" />
        <circle class="st0" cx="629.4" cy="218.8" r="1.0" />
        <circle class="st0" cx="629.4" cy="225.6" r="1.0" />
        <circle class="st0" cx="629.4" cy="232.4" r="1.0" />
        <circle class="st0 pin two" cx="629.4" cy="239.2" r="4.9" data-country="thi"/>
        <circle class="st1" cx="629.4" cy="246" r="1.0" />
        <circle class="st0" cx="629.4" cy="252.7" r="1.0" />
        <circle class="st0" cx="629.4" cy="259.5" r="1.0" />
        <circle class="st0" cx="629.4" cy="273.1" r="1.0" />
        <circle class="st0" cx="629.4" cy="279.9" r="1.0" />
        <circle class="st0" cx="629.4" cy="286.6" r="1.0" />
        <circle class="st0" cx="629.4" cy="293.4" r="1.0" />
        <circle class="st0" cx="622.7" cy="49.3" r="1.0" />
        <circle class="st0" cx="622.7" cy="56" r="1.0" />
        <circle class="st0" cx="622.7" cy="69.6" r="1.0" />
        <circle class="st0" cx="622.7" cy="76.4" r="1.0" />
        <circle class="st0" cx="622.7" cy="83.2" r="1.0" />
        <circle class="st0" cx="622.7" cy="90" r="1.0" />
        <circle class="st0" cx="622.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="622.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="622.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="622.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="622.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="622.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="622.7" cy="137.4" r="1.0" />
        <circle class="st0" cx="622.7" cy="144.2" r="1.0" />
        <circle class="st0" cx="622.7" cy="151" r="1.0" />
        <circle class="st0" cx="622.7" cy="157.8" r="1.0" />
        <circle class="st0" cx="622.7" cy="164.6" r="1.0" />
        <circle class="st0" cx="622.7" cy="171.3" r="1.0" />
        <circle class="st0" cx="622.7" cy="178.1" r="1.0" />
        <circle class="st0" cx="622.7" cy="184.9" r="1.0" />
        <circle class="st0" cx="622.7" cy="191.7" r="1.0" />
        <circle class="st0" cx="622.7" cy="198.5" r="1.0" />
        <circle class="st0" cx="622.7" cy="205.3" r="1.0" />
        <circle class="st0" cx="622.7" cy="212" r="1.0" />
        <circle class="st0" cx="622.7" cy="218.8" r="1.0" />
        <circle class="st0" cx="622.7" cy="225.6" r="1.0" />
        <circle class="st0" cx="622.7" cy="232.4" r="1.0" />
        <circle class="st0" cx="622.7" cy="239.2" r="1.0" />
        <circle class="st0" cx="622.7" cy="246" r="1.0" />
        <circle
          class="st0"
          cx="622.7"
          cy="252.7"
          r="1.0"
        />
        <circle class="st0" cx="622.7" cy="259.5" r="1.0" />
        <circle class="st0" cx="622.7" cy="266.3" r="1.0" />
        <circle class="st0" cx="622.7" cy="273.1" r="1.0" />
        <circle class="st0" cx="622.7" cy="279.9" r="1.0" />
        <circle class="st0" cx="622.7" cy="286.6" r="1.0" />
        <circle class="st0" cx="615.9" cy="42.5" r="1.0" />
        <circle class="st0" cx="615.9" cy="49.3" r="1.0" />
        <circle class="st0" cx="615.9" cy="56" r="1.0" />
        <circle class="st0" cx="615.9" cy="69.6" r="1.0" />
        <circle class="st0" cx="615.9" cy="76.4" r="1.0" />
        <circle class="st0" cx="615.9" cy="83.2" r="1.0" />
        <circle class="st0" cx="615.9" cy="90" r="1.0" />
        <circle class="st0" cx="615.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="615.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="615.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="615.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="615.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="615.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="615.9" cy="137.4" r="1.0" />
        <circle class="st0" cx="615.9" cy="144.2" r="1.0" />
        <circle class="st0" cx="615.9" cy="151" r="1.0" />
        <circle class="st0" cx="615.9" cy="157.8" r="1.0" />
        <circle class="st0" cx="615.9" cy="164.6" r="1.0" />
        <circle class="st0" cx="615.9" cy="171.3" r="1.0" />
        <circle class="st0" cx="615.9" cy="178.1" r="1.0" />
        <circle class="st0" cx="615.9" cy="184.9" r="1.0" />
        <circle class="st0" cx="615.9" cy="191.7" r="1.0" />
        <circle class="st0" cx="615.9" cy="198.5" r="1.0" />
        <circle class="st0" cx="615.9" cy="205.3" r="1.0" />
        <circle class="st0" cx="615.9" cy="212" r="1.0" />
        <circle class="st0" cx="615.9" cy="218.8" r="1.0" />
        <circle class="st0" cx="615.9" cy="225.6" r="1.0" />
        <circle class="st0" cx="615.9" cy="232.4" r="1.0" />
        <circle class="st0" cx="615.9" cy="239.2" r="1.0" />
        <circle class="st0" cx="615.9" cy="246" r="1.0" />
        <circle class="st0" cx="615.9" cy="279.9" r="1.0" />
        <circle class="st0" cx="609.1" cy="49.3" r="1.0" />
        <circle class="st0" cx="609.1" cy="69.6" r="1.0" />
        <circle class="st0" cx="609.1" cy="76.4" r="1.0" />
        <circle class="st0" cx="609.1" cy="83.2" r="1.0" />
        <circle class="st0" cx="609.1" cy="90" r="1.0" />
        <circle
          class="st0"
          cx="609.1"
          cy="96.7"
          r="1.0"
        />
        <circle class="st0" cx="609.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="609.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="609.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="609.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="609.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="609.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="609.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="609.1" cy="151" r="1.0" />
        <circle class="st0" cx="609.1" cy="157.8" r="1.0" />
        <circle class="st0" cx="609.1" cy="164.6" r="1.0" />
        <circle class="st0" cx="609.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="609.1" cy="178.1" r="1.0" />
        <circle class="st0" cx="609.1" cy="184.9" r="1.0" />
        <circle class="st0" cx="609.1" cy="191.7" r="1.0" />
        <circle class="st1" cx="609.1" cy="198.5" r="1.0" />
        <circle class="st0" cx="609.1" cy="205.3" r="1.0" />
        <circle class="st0" cx="609.1" cy="212" r="1.0" />
        <circle class="st0" cx="609.1" cy="218.8" r="1.0" />
        <circle class="st0" cx="609.1" cy="225.6" r="1.0" />
        <circle class="st0" cx="609.1" cy="232.4" r="1.0" />
        <circle class="st0" cx="609.1" cy="239.2" r="1.0" />
        <circle class="st0" cx="602.3" cy="76.4" r="1.0" />
        <circle class="st0" cx="602.3" cy="83.2" r="1.0" />
        <circle class="st0" cx="602.3" cy="90" r="1.0" />
        <circle class="st0" cx="602.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="602.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="602.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="602.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="602.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="602.3" cy="130.7" r="1.0" />
        <circle class="st0" cx="602.3" cy="137.4" r="1.0" />
        <circle class="st0" cx="602.3" cy="144.2" r="1.0" />
        <circle class="st0" cx="602.3" cy="151" r="1.0" />
        <circle class="st0" cx="602.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="602.3" cy="164.6" r="1.0" />
        <circle class="st0" cx="602.3" cy="171.3" r="1.0" />
        <circle class="st0" cx="602.3" cy="178.1" r="1.0" />
        <circle class="st0" cx="602.3" cy="184.9" r="1.0" />
        <circle class="st0" cx="602.3" cy="191.7" r="1.0" />
        <circle class="st0" cx="602.3" cy="198.5" r="1.0" />
        <circle class="st0" cx="602.3" cy="205.3" r="1.0" />
        <circle class="st0" cx="602.3" cy="212" r="1.0" />
        <circle class="st0" cx="602.3" cy="218.8" r="1.0" />
        <circle class="st0" cx="602.3" cy="225.6" r="1.0" />
        <circle class="st0" cx="602.3" cy="232.4" r="1.0" />
        <circle class="st0" cx="602.3" cy="239.2" r="1.0" />
        <circle class="st0" cx="595.5" cy="76.4" r="1.0" />
        <circle class="st0" cx="595.5" cy="83.2" r="1.0" />
        <circle class="st0" cx="595.5" cy="90" r="1.0" />
        <circle class="st0" cx="595.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="595.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="595.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="595.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="595.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="595.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="595.5" cy="137.4" r="1.0" />
        <circle class="st0" cx="595.5" cy="144.2" r="1.0" />
        <circle class="st0" cx="595.5" cy="151" r="1.0" />
        <circle class="st0" cx="595.5" cy="157.8" r="1.0" />
        <circle class="st0" cx="595.5" cy="164.6" r="1.0" />
        <circle class="st0" cx="595.5" cy="171.3" r="1.0" />
        <circle class="st0" cx="595.5" cy="178.1" r="1.0" />
        <circle class="st0" cx="595.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="595.5" cy="191.7" r="1.0" />
        <circle class="st0" cx="595.5" cy="198.5" r="1.0" />
        <circle class="st0" cx="595.5" cy="205.3" r="1.0" />
        <circle class="st0" cx="595.5" cy="212" r="1.0" />
        <circle class="st0" cx="595.5" cy="218.8" r="1.0" />
        <circle class="st0" cx="595.5" cy="225.6" r="1.0" />
        <circle class="st0" cx="595.5" cy="232.4" r="1.0" />
        <circle class="st0" cx="595.5" cy="239.2" r="1.0" />
        <circle class="st0" cx="588.7" cy="83.2" r="1.0" />
        <circle class="st0" cx="588.7" cy="90" r="1.0" />
        <circle class="st0" cx="588.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="588.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="588.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="588.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="588.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="588.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="588.7" cy="137.4" r="1.0" />
        <circle class="st0" cx="588.7" cy="144.2" r="1.0" />
        <circle class="st0" cx="588.7" cy="151" r="1.0" />
        <circle class="st0" cx="588.7" cy="157.8" r="1.0" />
        <circle class="st0" cx="588.7" cy="164.6" r="1.0" />
        <circle class="st0" cx="588.7" cy="171.3" r="1.0" />
        <circle class="st0" cx="588.7" cy="178.1" r="1.0" />
        <circle class="st0" cx="588.7" cy="184.9" r="1.0" />
        <circle class="st0" cx="588.7" cy="191.7" r="1.0" />
        <circle class="st0" cx="588.7" cy="198.5" r="1.0" />
        <circle class="st0" cx="588.7" cy="205.3" r="1.0" />
        <circle class="st0" cx="588.7" cy="212" r="1.0" />
        <circle class="st0" cx="588.7" cy="218.8" r="1.0" />
        <circle class="st0" cx="588.7" cy="225.6" r="1.0" />
        <circle class="st0" cx="588.7" cy="232.4" r="1.0" />
        <circle class="st0" cx="588.7" cy="239.2" r="1.0" />
        <circle class="st0" cx="588.7" cy="246" r="1.0" />
        <circle class="st0" cx="582" cy="83.2" r="1.0" />
        <circle class="st0" cx="582" cy="90" r="1.0" />
        <circle class="st0" cx="582" cy="96.7" r="1.0" />
        <circle class="st0" cx="582" cy="103.5" r="1.0" />
        <circle class="st0" cx="582" cy="110.3" r="1.0" />
        <circle class="st0" cx="582" cy="117.1" r="1.0" />
        <circle class="st0" cx="582" cy="123.9" r="1.0" />
        <circle class="st0" cx="582" cy="130.7" r="1.0" />
        <circle class="st0" cx="582" cy="137.4" r="1.0" />
        <circle class="st0" cx="582" cy="144.2" r="1.0" />
        <circle class="st0" cx="582" cy="151" r="1.0" />
        <circle class="st0" cx="582" cy="157.8" r="1.0" />
        <circle class="st0" cx="582" cy="164.6" r="1.0" />
        <circle class="st0" cx="582" cy="171.3" r="1.0" />
        <circle class="st0" cx="582" cy="178.1" r="1.0" />
        <circle class="st0" cx="582" cy="184.9" r="1.0" />
        <circle class="st0" cx="582" cy="191.7" r="1.0" />
        <circle class="st0" cx="582" cy="198.5" r="1.0" />
        <circle class="st0" cx="582" cy="205.3" r="1.0" />
        <circle class="st0" cx="582" cy="212" r="1.0" />
        <circle class="st0" cx="582" cy="218.8" r="1.0" />
        <circle class="st0" cx="582" cy="225.6" r="1.0" />
        <circle class="st0" cx="582" cy="232.4" r="1.0" />
        <circle class="st0" cx="582" cy="239.2" r="1.0" />
        <circle class="st0" cx="582" cy="246" r="1.0" />
        <circle class="st0" cx="582" cy="252.7" r="1.0" />
        <circle class="st0" cx="582" cy="259.5" r="1.0" />
        <circle class="st0" cx="582" cy="273.1" r="1.0" />
        <circle class="st0" cx="575.2" cy="83.2" r="1.0" />
        <circle class="st0" cx="575.2" cy="90" r="1.0" />
        <circle class="st0" cx="575.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="575.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="575.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="575.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="575.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="575.2" cy="130.7" r="1.0" />
        <circle class="st0" cx="575.2" cy="137.4" r="1.0" />
        <circle class="st1" cx="575.2" cy="144.2" r="1.0" />
        <circle class="st0" cx="575.2" cy="151" r="1.0" />
        <circle class="st0" cx="575.2" cy="157.8" r="1.0" />
        <circle class="st0" cx="575.2" cy="164.6" r="1.0" />
        <circle class="st0" cx="575.2" cy="171.3" r="1.0" />
        <circle class="st0" cx="575.2" cy="178.1" r="1.0" />
        <circle class="st0" cx="575.2" cy="184.9" r="1.0" />
        <circle class="st0" cx="575.2" cy="191.7" r="1.0" />
        <circle class="st0" cx="575.2" cy="198.5" r="1.0" />
        <circle class="st0" cx="575.2" cy="205.3" r="1.0" />
        <circle class="st0" cx="575.2" cy="212" r="1.0" />
        <circle class="st0" cx="575.2" cy="218.8" r="1.0" />
        <circle class="st0" cx="575.2" cy="225.6" r="1.0" />
        <circle
          class="st0"
          cx="575.2"
          cy="232.4"
          r="1.0"
        />
        <circle class="st0" cx="575.2" cy="239.2" r="1.0" />
        <circle class="st0" cx="575.2" cy="246" r="1.0" />
        <circle class="st0 pin one" cx="575.2" cy="252.7" r="4.9" data-country="ind"/>
        <circle class="st0" cx="575.2" cy="259.5" r="1.0" />
        <circle class="st0" cx="575.2" cy="266.3" r="1.0" />
        <circle class="st0" cx="568.4" cy="83.2" r="1.0" />
        <circle class="st0" cx="568.4" cy="90" r="1.0" />
        <circle class="st0" cx="568.4" cy="96.7" r="1.0" />
        <circle class="st0" cx="568.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="568.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="568.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="568.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="568.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="568.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="568.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="568.4" cy="151" r="1.0" />
        <circle class="st0" cx="568.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="568.4" cy="164.6" r="1.0" />
        <circle class="st0" cx="568.4" cy="171.3" r="1.0" />
        <circle class="st0" cx="568.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="568.4" cy="184.9" r="1.0" />
        <circle class="st0" cx="568.4" cy="191.7" r="1.0" />
        <circle class="st0" cx="568.4" cy="198.5" r="1.0" />
        <circle class="st0" cx="568.4" cy="205.3" r="1.0" />
        <circle class="st0" cx="568.4" cy="212" r="1.0" />
        <circle class="st0" cx="568.4" cy="218.8" r="1.0" />
        <circle class="st0" cx="568.4" cy="225.6" r="1.0" />
        <circle class="st0" cx="568.4" cy="232.4" r="1.0" />
        <circle class="st0" cx="568.4" cy="239.2" r="1.0" />
        <circle class="st0" cx="568.4" cy="246" r="1.0" />
        <circle class="st0" cx="568.4" cy="252.7" r="1.0" />
        <circle class="st0" cx="568.4" cy="259.5" r="1.0" />
        <circle class="st0" cx="561.6" cy="83.2" r="1.0" />
        <circle class="st0" cx="561.6" cy="90" r="1.0" />
        <circle class="st0" cx="561.6" cy="96.7" r="1.0" />
        <circle class="st0" cx="561.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="561.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="561.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="561.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="561.6" cy="130.7" r="1.0" />
        <circle class="st0" cx="561.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="561.6" cy="144.2" r="1.0" />
        <circle class="st0" cx="561.6" cy="151" r="1.0" />
        <circle class="st0" cx="561.6" cy="157.8" r="1.0" />
        <circle class="st0" cx="561.6" cy="164.6" r="1.0" />
        <circle class="st0" cx="561.6" cy="171.3" r="1.0" />
        <circle class="st0" cx="561.6" cy="178.1" r="1.0" />
        <circle class="st0" cx="561.6" cy="184.9" r="1.0" />
        <circle class="st0" cx="561.6" cy="191.7" r="1.0" />
        <circle class="st0" cx="561.6" cy="198.5" r="1.0" />
        <circle class="st0" cx="561.6" cy="205.3" r="1.0" />
        <circle class="st0" cx="561.6" cy="212" r="1.0" />
        <circle class="st0" cx="561.6" cy="218.8" r="1.0" />
        <circle class="st0" cx="561.6" cy="225.6" r="1.0" />
        <circle class="st0" cx="561.6" cy="232.4" r="1.0" />
        <circle class="st0" cx="561.6" cy="239.2" r="1.0" />
        <circle class="st0" cx="554.8" cy="69.6" r="1.0" />
        <circle class="st0" cx="554.8" cy="83.2" r="1.0" />
        <circle class="st0" cx="554.8" cy="90" r="1.0" />
        <circle class="st0" cx="554.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="541.3" cy="49.3" r="1.0" />
        <circle class="st0" cx="548.1" cy="49.3" r="1.0" />
        <circle class="st0" cx="534.5" cy="42.5" r="1.0" />
        <circle class="st0" cx="534.5" cy="49.3" r="1.0" />
        <circle class="st0" cx="527.7" cy="42.5" r="1.0" />
        <circle class="st0" cx="527.7" cy="49.3" r="1.0" />
        <circle class="st0" cx="520.9" cy="49.3" r="1.0" />
        <circle class="st0" cx="507.4" cy="49.3" r="1.0" />
        <circle class="st0" cx="500.6" cy="42.5" r="1.0" />
        <circle class="st0" cx="500.6" cy="49.3" r="1.0" />
        <circle class="st0" cx="493.8" cy="42.5" r="1.0" />
        <circle class="st0" cx="554.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="554.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="554.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="554.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="554.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="554.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="554.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="554.8" cy="151" r="1.0" />
        <circle class="st0" cx="554.8" cy="157.8" r="1.0" />
        <circle class="st0" cx="554.8" cy="164.6" r="1.0" />
        <circle class="st0" cx="554.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="554.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="554.8" cy="184.9" r="1.0" />
        <circle class="st0" cx="554.8" cy="191.7" r="1.0" />
        <circle class="st0" cx="554.8" cy="198.5" r="1.0" />
        <circle class="st0" cx="554.8" cy="205.3" r="1.0" />
        <circle class="st0" cx="554.8" cy="212" r="1.0" />
        <circle class="st0" cx="554.8" cy="218.8" r="1.0" />
        <circle class="st0" cx="554.8" cy="225.6" r="1.0" />
        <circle class="st0" cx="554.8" cy="232.4" r="1.0" />
        <circle class="st0" cx="554.8" cy="239.2" r="1.0" />
        <circle class="st0" cx="548.1" cy="69.6" r="1.0" />
        <circle class="st0" cx="548.1" cy="90" r="1.0" />
        <circle class="st0" cx="548.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="548.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="548.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="548.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="548.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="548.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="548.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="548.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="548.1" cy="151" r="1.0" />
        <circle class="st0" cx="548.1" cy="157.8" r="1.0" />
        <circle class="st0" cx="548.1" cy="164.6" r="1.0" />
        <circle class="st0" cx="548.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="548.1" cy="178.1" r="1.0" />
        <circle class="st0" cx="548.1" cy="184.9" r="1.0" />
        <circle class="st0" cx="548.1" cy="191.7" r="1.0" />
        <circle class="st0" cx="548.1" cy="198.5" r="1.0" />
        <circle class="st0" cx="548.1" cy="205.3" r="1.0" />
        <circle class="st0" cx="548.1" cy="212" r="1.0" />
        <circle class="st0" cx="548.1" cy="218.8" r="1.0" />
        <circle class="st0" cx="548.1" cy="225.6" r="1.0" />
        <circle class="st0" cx="541.3" cy="69.6" r="1.0" />
        <circle class="st0" cx="541.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="541.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="541.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="541.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="541.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="541.3" cy="130.7" r="1.0" />
        <circle class="st0" cx="541.3" cy="137.4" r="1.0" />
        <circle class="st0" cx="541.3" cy="144.2" r="1.0" />
        <circle class="st0" cx="541.3" cy="151" r="1.0" />
        <circle class="st0" cx="541.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="541.3" cy="164.6" r="1.0" />
        <circle class="st0" cx="541.3" cy="171.3" r="1.0" />
        <circle class="st0" cx="541.3" cy="178.1" r="1.0" />
        <circle class="st0" cx="541.3" cy="184.9" r="1.0" />
        <circle class="st0" cx="541.3" cy="191.7" r="1.0" />
        <circle class="st0" cx="541.3" cy="198.5" r="1.0" />
        <circle class="st0" cx="541.3" cy="205.3" r="1.0" />
        <circle class="st0" cx="541.3" cy="212" r="1.0" />
        <circle class="st0" cx="541.3" cy="218.8" r="1.0" />
        <circle class="st0" cx="541.3" cy="225.6" r="1.0" />
        <circle class="st0" cx="534.5" cy="69.6" r="1.0" />
        <circle class="st0" cx="534.5" cy="76.4" r="1.0" />
        <circle class="st0" cx="534.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="534.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="534.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="534.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="534.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="534.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="534.5" cy="137.4" r="1.0" />
        <circle class="st0" cx="534.5" cy="144.2" r="1.0" />
        <circle class="st0" cx="534.5" cy="151" r="1.0" />
        <circle class="st0" cx="534.5" cy="157.8" r="1.0" />
        <circle class="st0" cx="534.5" cy="164.6" r="1.0" />
        <circle class="st0" cx="534.5" cy="171.3" r="1.0" />
        <circle class="st0" cx="534.5" cy="178.1" r="1.0" />
        <circle class="st0" cx="534.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="534.5" cy="191.7" r="1.0" />
        <circle class="st0" cx="534.5" cy="198.5" r="1.0" />
        <circle class="st0" cx="534.5" cy="205.3" r="1.0" />
        <circle class="st0" cx="534.5" cy="212" r="1.0" />
        <circle class="st0" cx="534.5" cy="218.8" r="1.0" />
        <circle class="st0" cx="534.5" cy="225.6" r="1.0" />
        <circle class="st0" cx="527.7" cy="76.4" r="1.0" />
        <circle class="st0" cx="527.7" cy="83.2" r="1.0" />
        <circle class="st0" cx="527.7" cy="90" r="1.0" />
        <circle class="st0" cx="527.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="527.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="527.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="527.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="527.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="527.7" cy="137.4" r="1.0" />
        <circle class="st0" cx="527.7" cy="144.2" r="1.0" />
        <circle class="st0" cx="527.7" cy="151" r="1.0" />
        <circle class="st0" cx="527.7" cy="157.8" r="1.0" />
        <circle class="st0" cx="527.7" cy="164.6" r="1.0" />
        <circle class="st0" cx="527.7" cy="171.3" r="1.0" />
        <circle class="st0" cx="527.7" cy="178.1" r="1.0" />
        <circle class="st0" cx="527.7" cy="184.9" r="1.0" />
        <circle class="st0" cx="527.7" cy="191.7" r="1.0" />
        <circle class="st0" cx="527.7" cy="198.5" r="1.0" />
        <circle class="st0" cx="527.7" cy="205.3" r="1.0" />
        <circle class="st0" cx="527.7" cy="212" r="1.0" />
        <circle class="st0" cx="527.7" cy="218.8" r="1.0" />
        <circle class="st0" cx="527.7" cy="225.6" r="1.0" />
        <circle class="st0" cx="527.7" cy="239.2" r="1.0" />
        <circle class="st1" cx="520.9" cy="83.2" r="1.0" />
        <circle class="st0" cx="520.9" cy="90" r="1.0" />
        <circle class="st0" cx="520.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="520.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="520.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="520.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="520.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="520.9" cy="137.4" r="1.0" />
        <circle class="st0" cx="520.9" cy="144.2" r="1.0" />
        <circle class="st0" cx="520.9" cy="151" r="1.0" />
        <circle class="st0" cx="520.9" cy="157.8" r="1.0" />
        <circle class="st0" cx="520.9" cy="164.6" r="1.0" />
        <circle class="st0" cx="520.9" cy="171.3" r="1.0" />
        <circle class="st0" cx="520.9" cy="178.1" r="1.0" />
        <circle class="st0" cx="520.9" cy="184.9" r="1.0" />
        <circle class="st0" cx="520.9" cy="191.7" r="1.0" />
        <circle class="st0" cx="520.9" cy="198.5" r="1.0" />
        <circle class="st0" cx="520.9" cy="205.3" r="1.0" />
        <circle class="st0" cx="520.9" cy="212" r="1.0" />
        <circle class="st0" cx="520.9" cy="218.8" r="1.0" />
        <circle class="st0" cx="520.9" cy="225.6" r="1.0" />
        <circle class="st0" cx="520.9" cy="239.2" r="1.0" />
        <circle class="st0" cx="520.9" cy="246" r="1.0" />
        <circle class="st0" cx="514.1" cy="90" r="1.0" />
        <circle class="st0" cx="514.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="514.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="514.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="514.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="514.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="514.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="514.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="514.1" cy="151" r="1.0" />
        <circle class="st0" cx="514.1" cy="157.8" r="1.0" />
        <circle class="st0" cx="514.1" cy="164.6" r="1.0" />
        <circle class="st0" cx="514.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="514.1" cy="178.1" r="1.0" />
        <circle class="st0" cx="514.1" cy="184.9" r="1.0" />
        <circle class="st0" cx="514.1" cy="191.7" r="1.0" />
        <circle class="st0" cx="514.1" cy="198.5" r="1.0" />
        <circle class="st0" cx="514.1" cy="205.3" r="1.0" />
        <circle class="st0" cx="514.1" cy="212" r="1.0" />
        <circle class="st0" cx="514.1" cy="218.8" r="1.0" />
        <circle
          class="st0"
          cx="514.1"
          cy="232.4"
          r="1.0"
        />
        <circle class="st0 pin two" cx="514.1" cy="239.2" r="4.9" data-country="uae"/>
        <circle class="st0" cx="514.1" cy="246" r="1.0" />
        <circle class="st0" cx="514.1" cy="252.7" r="1.0" />
        <circle class="st0" cx="514.1" cy="266.3" r="1.0" />
        <circle class="st0" cx="514.1" cy="273.1" r="1.0" />
        <circle class="st1" cx="514.1" cy="320.6" r="1.0" />
        <circle class="st0" cx="507.4" cy="96.7" r="1.0" />
        <circle class="st0" cx="507.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="507.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="507.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="507.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="507.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="507.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="507.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="507.4" cy="151" r="1.0" />
        <circle class="st0" cx="507.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="507.4" cy="164.6" r="1.0" />
        <circle class="st0" cx="507.4" cy="171.3" r="1.0" />
        <circle class="st0" cx="507.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="507.4" cy="184.9" r="1.0" />
        <circle class="st0" cx="507.4" cy="191.7" r="1.0" />
        <circle class="st0" cx="507.4" cy="198.5" r="1.0" />
        <circle class="st0" cx="507.4" cy="205.3" r="1.0" />
        <circle class="st0" cx="507.4" cy="212" r="1.0" />
        <circle class="st0" cx="507.4" cy="218.8" r="1.0" />
        <circle class="st0" cx="507.4" cy="225.6" r="1.0" />
        <circle class="st0" cx="507.4" cy="232.4" r="1.0" />
        <circle class="st0" cx="507.4" cy="239.2" r="1.0" />
        <circle class="st0" cx="507.4" cy="246" r="1.0" />
        <circle class="st0" cx="507.4" cy="252.7" r="1.0" />
        <circle class="st0" cx="507.4" cy="266.3" r="1.0" />
        <circle class="st0" cx="507.4" cy="273.1" r="1.0" />
        <circle class="st0" cx="507.4" cy="320.6" r="1.0" />
        <circle class="st0" cx="507.4" cy="327.3" r="1.0" />
        <circle class="st0" cx="507.4" cy="334.1" r="1.0" />
        <circle class="st0" cx="507.4" cy="340.9" r="1.0" />
        <circle class="st0" cx="500.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="500.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="500.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="500.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="500.6" cy="130.7" r="1.0" />
        <circle class="st0" cx="500.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="500.6" cy="144.2" r="1.0" />
        <circle class="st0" cx="500.6" cy="151" r="1.0" />
        <circle class="st0" cx="500.6" cy="157.8" r="1.0" />
        <circle class="st0" cx="500.6" cy="164.6" r="1.0" />
        <circle class="st0" cx="500.6" cy="171.3" r="1.0" />
        <circle class="st0" cx="500.6" cy="178.1" r="1.0" />
        <circle class="st0" cx="500.6" cy="184.9" r="1.0" />
        <circle
          class="st0 pin one"
          cx="405.6"
          cy="157.8"
          r="4.9"
          data-country="neth"
        />
        <circle class="st0" cx="398.8" cy="151" r="1.0" />
        <circle class="st0" cx="392.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="398.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="392.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="392.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="392.1" cy="151" r="1.0" />
        <circle class="st0" cx="392.1" cy="157.8" r="1.0" />
        <circle
          class="st0"
          cx="385.3"
          cy="137.4"
          r="1.0"
        />
        <circle class="st0 pin one" cx="385.3" cy="144.2" r="4.9" data-country="uk"/>
        <circle class="st0" cx="385.3" cy="151" r="1.0" />
        <circle class="st0" cx="385.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="378.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="378.5" cy="144.2" r="1.0" />
        <circle class="st0" cx="378.5" cy="151" r="1.0" />
        <circle class="st0" cx="371.7" cy="151" r="1.0" />
        <circle class="st0" cx="500.6" cy="191.7" r="1.0" />
        <circle class="st0" cx="500.6" cy="198.5" r="1.0" />
        <circle class="st0" cx="500.6" cy="205.3" r="1.0" />
        <circle class="st0" cx="500.6" cy="212" r="1.0" />
        <circle class="st1" cx="500.6" cy="218.8" r="1.0" />
        <circle class="st0" cx="500.6" cy="225.6" r="1.0" />
        <circle class="st0" cx="500.6" cy="232.4" r="1.0" />
        <circle class="st0" cx="500.6" cy="239.2" r="1.0" />
        <circle class="st0" cx="500.6" cy="246" r="1.0" />
        <circle class="st0" cx="500.6" cy="252.7" r="1.0" />
        <circle class="st0" cx="500.6" cy="259.5" r="1.0" />
        <circle class="st0" cx="500.6" cy="266.3" r="1.0" />
        <circle class="st0" cx="500.6" cy="273.1" r="1.0" />
        <circle class="st0" cx="500.6" cy="279.9" r="1.0" />
        <circle class="st0" cx="500.6" cy="327.3" r="1.0" />
        <circle class="st0" cx="500.6" cy="334.1" r="1.0" />
        <circle class="st0" cx="500.6" cy="340.9" r="1.0" />
        <circle class="st0" cx="500.6" cy="347.7" r="1.0" />
        <circle class="st0" cx="493.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="493.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="493.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="493.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="493.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="493.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="493.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="493.8" cy="151" r="1.0" />
        <circle class="st0" cx="493.8" cy="157.8" r="1.0" />
        <circle class="st0" cx="493.8" cy="164.6" r="1.0" />
        <circle class="st0" cx="493.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="493.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="493.8" cy="184.9" r="1.0" />
        <circle class="st0" cx="493.8" cy="191.7" r="1.0" />
        <circle class="st0" cx="493.8" cy="198.5" r="1.0" />
        <circle class="st0" cx="493.8" cy="205.3" r="1.0" />
        <circle class="st0" cx="493.8" cy="212" r="1.0" />
        <circle class="st0" cx="493.8" cy="218.8" r="1.0" />
        <circle class="st0" cx="493.8" cy="225.6" r="1.0" />
        <circle class="st0" cx="493.8" cy="232.4" r="1.0" />
        <circle class="st0" cx="493.8" cy="239.2" r="1.0" />
        <circle class="st0" cx="493.8" cy="246" r="1.0" />
        <circle class="st0" cx="493.8" cy="259.5" r="1.0" />
        <circle class="st0" cx="493.8" cy="266.3" r="1.0" />
        <circle class="st0" cx="493.8" cy="273.1" r="1.0" />
        <circle class="st0" cx="493.8" cy="279.9" r="1.0" />
        <circle class="st0" cx="493.8" cy="286.6" r="1.0" />
        <circle class="st0" cx="487" cy="103.5" r="1.0" />
        <circle class="st0" cx="487" cy="110.3" r="1.0" />
        <circle class="st0" cx="487" cy="117.1" r="1.0" />
        <circle class="st0" cx="487" cy="123.9" r="1.0" />
        <circle class="st0" cx="487" cy="130.7" r="1.0" />
        <circle class="st0" cx="487" cy="137.4" r="1.0" />
        <circle class="st0" cx="487" cy="144.2" r="1.0" />
        <circle class="st0" cx="487" cy="151" r="1.0" />
        <circle class="st0" cx="487" cy="157.8" r="1.0" />
        <circle class="st0" cx="487" cy="164.6" r="1.0" />
        <circle class="st0" cx="487" cy="171.3" r="1.0" />
        <circle class="st0" cx="487" cy="178.1" r="1.0" />
        <circle class="st0" cx="487" cy="191.7" r="1.0" />
        <circle class="st0" cx="487" cy="198.5" r="1.0" />
        <circle class="st0" cx="487" cy="205.3" r="1.0" />
        <circle class="st0" cx="487" cy="212" r="1.0" />
        <circle class="st0 pin two" cx="487" cy="218.8" r="4.9" data-country="jor"/>
        <circle class="st0" cx="487" cy="225.6" r="1.0" />
        <circle class="st0" cx="487" cy="232.4" r="1.0" />
        <circle class="st0" cx="487" cy="239.2" r="1.0" />
        <circle class="st0" cx="487" cy="252.7" r="1.0" />
        <circle class="st0" cx="487" cy="259.5" r="1.0" />
        <circle class="st0" cx="487" cy="266.3" r="1.0" />
        <circle class="st0" cx="487" cy="273.1" r="1.0" />
        <circle class="st0" cx="487" cy="279.9" r="1.0" />
        <circle class="st0" cx="487" cy="286.6" r="1.0" />
        <circle class="st0" cx="487" cy="293.4" r="1.0" />
        <circle class="st0" cx="487" cy="300.2" r="1.0" />
        <circle class="st0" cx="487" cy="307" r="1.0" />
        <circle class="st0" cx="487" cy="313.8" r="1.0" />
        <circle class="st0" cx="487" cy="320.6" r="1.0" />
        <circle class="st0" cx="487" cy="327.3" r="1.0" />
        <circle class="st0" cx="480.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="480.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="480.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="480.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="480.2" cy="130.7" r="1.0" />
        <circle class="st0" cx="480.2" cy="137.4" r="1.0" />
        <circle class="st0" cx="480.2" cy="144.2" r="1.0" />
        <circle class="st0" cx="480.2" cy="151" r="1.0" />
        <circle class="st0" cx="480.2" cy="157.8" r="1.0" />
        <circle class="st0" cx="358.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="351.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="351.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="344.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="344.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="480.2" cy="164.6" r="1.0" />
        <circle class="st0" cx="480.2" cy="171.3" r="1.0" />
        <circle class="st0" cx="480.2" cy="178.1" r="1.0" />
        <circle class="st0" cx="480.2" cy="191.7" r="1.0" />
        <circle class="st0" cx="480.2" cy="198.5" r="1.0" />
        <circle class="st0" cx="480.2" cy="205.3" r="1.0" />
        <circle
          class="st0 pin one"
          cx="480.2"
          cy="212"
          r="4.9"
          data-country="isrl"
        />
        <circle
          class="st0"
          cx="480.2"
          cy="218.8"
          r="1.0"
        />
        <circle class="st0" cx="480.2" cy="225.6" r="1.0" />
        <circle class="st0" cx="480.2" cy="239.2" r="1.0" />
        <circle class="st0" cx="480.2" cy="246" r="1.0" />
        <circle class="st0" cx="480.2" cy="252.7" r="1.0" />
        <circle class="st0" cx="480.2" cy="259.5" r="1.0" />
        <circle class="st0" cx="480.2" cy="266.3" r="1.0" />
        <circle class="st0" cx="480.2" cy="273.1" r="1.0" />
        <circle class="st0" cx="480.2" cy="279.9" r="1.0" />
        <circle class="st0" cx="480.2" cy="286.6" r="1.0" />
        <circle class="st0" cx="480.2" cy="293.4" r="1.0" />
        <circle class="st0" cx="480.2" cy="300.2" r="1.0" />
        <circle class="st0" cx="480.2" cy="307" r="1.0" />
        <circle class="st0" cx="480.2" cy="313.8" r="1.0" />
        <circle class="st0" cx="480.2" cy="320.6" r="1.0" />
        <circle class="st0" cx="480.2" cy="327.3" r="1.0" />
        <circle class="st0" cx="480.2" cy="334.1" r="1.0" />
        <circle class="st0" cx="480.2" cy="340.9" r="1.0" />
        <circle class="st0" cx="480.2" cy="347.7" r="1.0" />
        <circle class="st0" cx="473.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="473.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="473.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="473.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="473.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="473.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="473.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="473.4" cy="151" r="1.0" />
        <circle class="st0" cx="473.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="473.4" cy="164.6" r="1.0" />
        <circle class="st0" cx="473.4" cy="171.3" r="1.0" />
        <circle class="st0" cx="473.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="473.4" cy="191.7" r="1.0" />
        <circle class="st0" cx="473.4" cy="198.5" r="1.0" />
        <circle class="st0" cx="473.4" cy="205.3" r="1.0" />
        <circle class="st0" cx="473.4" cy="218.8" r="1.0" />
        <circle class="st0" cx="473.4" cy="225.6" r="1.0" />
        <circle class="st0" cx="473.4" cy="232.4" r="1.0" />
        <circle class="st0" cx="473.4" cy="239.2" r="1.0" />
        <circle class="st0" cx="473.4" cy="246" r="1.0" />
        <circle class="st0" cx="473.4" cy="252.7" r="1.0" />
        <circle class="st0" cx="473.4" cy="259.5" r="1.0" />
        <circle class="st0" cx="473.4" cy="266.3" r="1.0" />
        <circle class="st0" cx="473.4" cy="273.1" r="1.0" />
        <circle class="st0" cx="473.4" cy="279.9" r="1.0" />
        <circle class="st0" cx="473.4" cy="286.6" r="1.0" />
        <circle class="st0" cx="473.4" cy="293.4" r="1.0" />
        <circle class="st0" cx="473.4" cy="300.2" r="1.0" />
        <circle class="st0" cx="473.4" cy="307" r="1.0" />
        <circle class="st0" cx="473.4" cy="313.8" r="1.0" />
        <circle class="st0" cx="473.4" cy="320.6" r="1.0" />
        <circle class="st0" cx="473.4" cy="327.3" r="1.0" />
        <circle class="st0" cx="473.4" cy="334.1" r="1.0" />
        <circle class="st0" cx="473.4" cy="340.9" r="1.0" />
        <circle class="st0" cx="473.4" cy="347.7" r="1.0" />
        <circle class="st0" cx="466.7" cy="90" r="1.0" />
        <circle class="st0" cx="466.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="466.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="466.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="466.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="466.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="466.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="466.7" cy="137.4" r="1.0" />
        <circle class="st0" cx="466.7" cy="144.2" r="1.0" />
        <circle class="st0" cx="466.7" cy="151" r="1.0" />
        <circle class="st0" cx="466.7" cy="157.8" r="1.0" />
        <circle class="st1" cx="466.7" cy="164.6" r="1.0" />
        <circle class="st0" cx="466.7" cy="171.3" r="1.0" />
        <circle class="st0" cx="466.7" cy="178.1" r="1.0" />
        <circle class="st0" cx="466.7" cy="191.7" r="1.0" />
        <circle class="st0" cx="466.7" cy="198.5" r="1.0" />
        <circle class="st0" cx="466.7" cy="218.8" r="1.0" />
        <circle class="st0" cx="466.7" cy="225.6" r="1.0" />
        <circle class="st0 pin two" cx="466.7" cy="232.4" r="4.9" data-country="egy"/>
        <circle class="st0" cx="466.7" cy="239.2" r="1.0" />
        <circle class="st0" cx="466.7" cy="246" r="1.0" />
        <circle class="st0" cx="466.7" cy="252.7" r="1.0" />
        <circle class="st0" cx="466.7" cy="259.5" r="1.0" />
        <circle class="st0" cx="466.7" cy="266.3" r="1.0" />
        <circle class="st0" cx="466.7" cy="273.1" r="1.0" />
        <circle class="st0" cx="466.7" cy="279.9" r="1.0" />
        <circle class="st0" cx="466.7" cy="286.6" r="1.0" />
        <circle class="st0" cx="466.7" cy="293.4" r="1.0" />
        <circle class="st0" cx="466.7" cy="300.2" r="1.0" />
        <circle class="st0" cx="466.7" cy="307" r="1.0" />
        <circle class="st0" cx="466.7" cy="313.8" r="1.0" />
        <circle class="st0" cx="466.7" cy="320.6" r="1.0" />
        <circle class="st0" cx="466.7" cy="327.3" r="1.0" />
        <circle class="st0" cx="466.7" cy="334.1" r="1.0" />
        <circle class="st0" cx="466.7" cy="340.9" r="1.0" />
        <circle class="st0" cx="466.7" cy="347.7" r="1.0" />
        <circle class="st0" cx="466.7" cy="354.5" r="1.0" />
        <circle class="st0" cx="466.7" cy="361.3" r="1.0" />
        <circle class="st0" cx="459.9" cy="49.3" r="1.0" />
        <circle class="st0" cx="459.9" cy="90" r="1.0" />
        <circle class="st0" cx="459.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="459.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="459.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="459.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="459.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="459.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="459.9" cy="137.4" r="1.0" />
        <circle class="st0" cx="459.9" cy="144.2" r="1.0" />
        <circle class="st0" cx="459.9" cy="151" r="1.0" />
        <circle class="st0" cx="459.9" cy="157.8" r="1.0" />
        <circle class="st0" cx="459.9" cy="164.6" r="1.0" />
        <circle class="st0" cx="459.9" cy="171.3" r="1.0" />
        <circle class="st0" cx="459.9" cy="178.1" r="1.0" />
        <circle class="st0" cx="459.9" cy="184.9" r="1.0" />
        <circle class="st0" cx="459.9" cy="191.7" r="1.0" />
        <circle
          class="st0"
          cx="459.9"
          cy="198.5"
          r="1.0"
        />
        <circle class="st0" cx="459.9" cy="218.8" r="1.0" />
        <circle class="st0" cx="459.9" cy="225.6" r="1.0" />
        <circle
          class="st0"
          cx="459.9"
          cy="232.4"
          r="1.0"
        />
        <circle class="st0" cx="459.9" cy="239.2" r="1.0" />
        <circle class="st0" cx="459.9" cy="246" r="1.0" />
        <circle class="st0" cx="459.9" cy="252.7" r="1.0" />
        <circle class="st0" cx="459.9" cy="259.5" r="1.0" />
        <circle class="st0" cx="459.9" cy="266.3" r="1.0" />
        <circle class="st0" cx="459.9" cy="273.1" r="1.0" />
        <circle class="st0" cx="459.9" cy="279.9" r="1.0" />
        <circle class="st0" cx="459.9" cy="286.6" r="1.0" />
        <circle class="st0" cx="459.9" cy="293.4" r="1.0" />
        <circle class="st0" cx="459.9" cy="300.2" r="1.0" />
        <circle class="st0" cx="459.9" cy="307" r="1.0" />
        <circle class="st0" cx="459.9" cy="313.8" r="1.0" />
        <circle class="st0" cx="459.9" cy="320.6" r="1.0" />
        <circle class="st0" cx="459.9" cy="327.3" r="1.0" />
        <circle class="st0" cx="459.9" cy="334.1" r="1.0" />
        <circle class="st0" cx="459.9" cy="340.9" r="1.0" />
        <circle class="st0" cx="459.9" cy="347.7" r="1.0" />
        <circle class="st0" cx="459.9" cy="354.5" r="1.0" />
        <circle class="st0" cx="459.9" cy="361.3" r="1.0" />
        <circle class="st0" cx="459.9" cy="368" r="1.0" />
        <circle class="st0" cx="453.1" cy="49.3" r="1.0" />
        <circle class="st0" cx="453.1" cy="62.8" r="1.0" />
        <circle class="st0" cx="453.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="453.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="453.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="453.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="453.1" cy="123.9" r="1.0" />
        <circle
          class="st0"
          cx="453.1"
          cy="130.7"
          r="1.0"
        />
        <circle class="st0" cx="453.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="453.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="453.1" cy="151" r="1.0" />
        <circle class="st0" cx="453.1" cy="157.8" r="1.0" />
        <circle class="st0" cx="453.1" cy="164.6" r="1.0" />
        <circle class="st0" cx="453.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="453.1" cy="178.1" r="1.0" />
        <circle class="st0" cx="453.1" cy="184.9" r="1.0" />
        <circle class="st0" cx="453.1" cy="191.7" r="1.0" />
        <circle class="st0" cx="453.1" cy="198.5" r="1.0" />
        <circle class="st0" cx="453.1" cy="212" r="1.0" />
        <circle class="st0" cx="453.1" cy="218.8" r="1.0" />
        <circle class="st0" cx="453.1" cy="225.6" r="1.0" />
        <circle class="st0" cx="453.1" cy="232.4" r="1.0" />
        <circle class="st0" cx="453.1" cy="239.2" r="1.0" />
        <circle class="st0" cx="453.1" cy="246" r="1.0" />
        <circle class="st0" cx="453.1" cy="252.7" r="1.0" />
        <circle class="st0" cx="453.1" cy="259.5" r="1.0" />
        <circle class="st0" cx="453.1" cy="266.3" r="1.0" />
        <circle class="st0" cx="453.1" cy="273.1" r="1.0" />
        <circle class="st0" cx="453.1" cy="279.9" r="1.0" />
        <circle class="st0" cx="453.1" cy="286.6" r="1.0" />
        <circle class="st0" cx="453.1" cy="293.4" r="1.0" />
        <circle class="st0" cx="453.1" cy="300.2" r="1.0" />
        <circle class="st0" cx="453.1" cy="307" r="1.0" />
        <circle class="st0" cx="453.1" cy="313.8" r="1.0" />
        <circle class="st0" cx="453.1" cy="320.6" r="1.0" />
        <circle class="st0" cx="453.1" cy="327.3" r="1.0" />
        <circle class="st0" cx="453.1" cy="334.1" r="1.0" />
        <circle class="st0" cx="453.1" cy="340.9" r="1.0" />
        <circle class="st0" cx="453.1" cy="347.7" r="1.0" />
        <circle class="st0" cx="453.1" cy="354.5" r="1.0" />
        <circle class="st0 pin two" cx="453.1" cy="361.3" r="4.9" data-country="saf"/>
        <circle class="st1" cx="453.1" cy="368" r="1.0" />
        <circle class="st0" cx="446.3" cy="49.3" r="1.0" />
        <circle class="st0" cx="446.3" cy="56" r="1.0" />
        <circle class="st0" cx="446.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="446.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="446.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="446.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="446.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="446.3" cy="144.2" r="1.0" />
        <circle class="st0" cx="446.3" cy="151" r="1.0" />
        <circle class="st0" cx="446.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="446.3" cy="164.6" r="1.0" />
        <circle class="st0" cx="446.3" cy="171.3" r="1.0" />
        <circle class="st0" cx="446.3" cy="178.1" r="1.0" />
        <circle class="st0" cx="446.3" cy="184.9" r="1.0" />
        <circle class="st0" cx="446.3" cy="191.7" r="1.0" />
        <circle class="st0" cx="446.3" cy="198.5" r="1.0" />
        <circle class="st0" cx="446.3" cy="212" r="1.0" />
        <circle class="st0" cx="446.3" cy="218.8" r="1.0" />
        <circle class="st0" cx="446.3" cy="225.6" r="1.0" />
        <circle class="st0" cx="446.3" cy="232.4" r="1.0" />
        <circle class="st0" cx="446.3" cy="239.2" r="1.0" />
        <circle class="st0" cx="446.3" cy="246" r="1.0" />
        <circle class="st0" cx="446.3" cy="252.7" r="1.0" />
        <circle class="st0" cx="446.3" cy="259.5" r="1.0" />
        <circle class="st0" cx="446.3" cy="266.3" r="1.0" />
        <circle class="st0" cx="446.3" cy="273.1" r="1.0" />
        <circle class="st0" cx="446.3" cy="279.9" r="1.0" />
        <circle class="st0" cx="446.3" cy="286.6" r="1.0" />
        <circle class="st0" cx="446.3" cy="293.4" r="1.0" />
        <circle class="st0" cx="446.3" cy="300.2" r="1.0" />
        <circle class="st0" cx="446.3" cy="307" r="1.0" />
        <circle class="st0" cx="446.3" cy="313.8" r="1.0" />
        <circle class="st0" cx="446.3" cy="320.6" r="1.0" />
        <circle class="st0" cx="446.3" cy="327.3" r="1.0" />
        <circle class="st0" cx="446.3" cy="334.1" r="1.0" />
        <circle class="st0" cx="446.3" cy="340.9" r="1.0" />
        <circle class="st0" cx="446.3" cy="347.7" r="1.0" />
        <circle class="st0" cx="446.3" cy="354.5" r="1.0" />
        <circle class="st0" cx="446.3" cy="361.3" r="1.0" />
        <circle
          class="st0"
          cx="446.3"
          cy="368"
          r="1.0"
        />
        <circle class="st0" cx="439.5" cy="49.3" r="1.0" />
        <circle class="st0" cx="439.5" cy="56" r="1.0" />
        <circle class="st1" cx="439.5" cy="62.8" r="1.0" />
        <circle class="st0" cx="439.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="439.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="439.5" cy="110.3" r="1.0" />
        <circle class="st0 pin two" cx="439.5" cy="117.1" r="4.9" data-country="fin"/>
        <circle class="st0" cx="439.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="439.5" cy="151" r="1.0" />
        <circle
          class="st0"
          cx="439.5"
          cy="157.8"
          r="1.0"
        />
        <circle class="st0" cx="439.5" cy="164.6" r="1.0" />
        <circle class="st0" cx="439.5" cy="171.3" r="1.0" />
        <circle
          class="st0"
          cx="439.5"
          cy="178.1"
          r="1.0"
        />
        <!-- austria -->
        <circle class="st0" cx="439.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="439.5" cy="218.8" r="1.0" />
        <circle class="st0" cx="439.5" cy="225.6" r="1.0" />
        <circle class="st0" cx="439.5" cy="232.4" r="1.0" />
        <circle class="st0" cx="439.5" cy="239.2" r="1.0" />
        <circle class="st0" cx="439.5" cy="246" r="1.0" />
        <circle class="st0" cx="439.5" cy="252.7" r="1.0" />
        <circle class="st0" cx="439.5" cy="259.5" r="1.0" />
        <circle class="st0" cx="439.5" cy="266.3" r="1.0" />
        <circle class="st0" cx="439.5" cy="273.1" r="1.0" />
        <circle class="st0" cx="439.5" cy="279.9" r="1.0" />
        <circle class="st0" cx="439.5" cy="286.6" r="1.0" />
        <circle class="st0" cx="439.5" cy="293.4" r="1.0" />
        <circle class="st0" cx="439.5" cy="300.2" r="1.0" />
        <circle class="st0" cx="439.5" cy="307" r="1.0" />
        <circle class="st0" cx="439.5" cy="313.8" r="1.0" />
        <circle class="st0" cx="439.5" cy="320.6" r="1.0" />
        <circle class="st0" cx="439.5" cy="327.3" r="1.0" />
        <circle class="st0" cx="439.5" cy="334.1" r="1.0" />
        <circle class="st0" cx="439.5" cy="340.9" r="1.0" />
        <circle class="st0" cx="439.5" cy="347.7" r="1.0" />
        <circle class="st0" cx="439.5" cy="354.5" r="1.0" />
        <circle class="st0" cx="439.5" cy="361.3" r="1.0" />
        <circle class="st0" cx="439.5" cy="368" r="1.0" />
        <circle class="st0" cx="432.8" cy="56" r="1.0" />
        <circle class="st0" cx="432.8" cy="62.8" r="1.0" />
        <circle class="st0" cx="432.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="432.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="432.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="432.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="432.8" cy="130.7" r="1.0" />
        <circle class="st1" cx="432.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="432.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="432.8" cy="151" r="1.0" />
        <circle class="st0 pin one" cx="432.8" cy="157.8" r="4.9" data-country="pol"/>
        <circle class="st0" cx="432.8" cy="164.6" r="1.0" />
        <circle
          class="st0"
          cx="432.8"
          cy="171.3"
          r="1.0"
        />
        <circle class="st0" cx="432.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="432.8" cy="191.7" r="1.0" />
        <circle class="st0 pin one" cx="432.8" cy="198.5" r="4.9" data-country="gre"/>
        <circle class="st0" cx="432.8" cy="218.8" r="1.0" />
        <circle class="st0" cx="432.8" cy="225.6" r="1.0" />
        <circle class="st0" cx="432.8" cy="232.4" r="1.0" />
        <circle class="st0" cx="432.8" cy="239.2" r="1.0" />
        <circle class="st0" cx="432.8" cy="246" r="1.0" />
        <circle class="st0" cx="432.8" cy="252.7" r="1.0" />
        <circle class="st0" cx="432.8" cy="259.5" r="1.0" />
        <circle class="st0" cx="432.8" cy="266.3" r="1.0" />
        <circle class="st0" cx="432.8" cy="273.1" r="1.0" />
        <circle class="st0" cx="432.8" cy="279.9" r="1.0" />
        <circle class="st0" cx="432.8" cy="286.6" r="1.0" />
        <circle class="st0" cx="432.8" cy="293.4" r="1.0" />
        <circle class="st1" cx="432.8" cy="300.2" r="1.0" />
        <circle class="st0" cx="432.8" cy="307" r="1.0" />
        <circle class="st0" cx="432.8" cy="313.8" r="1.0" />
        <circle class="st0" cx="432.8" cy="320.6" r="1.0" />
        <circle class="st0" cx="432.8" cy="327.3" r="1.0" />
        <circle class="st0" cx="432.8" cy="334.1" r="1.0" />
        <circle class="st0" cx="432.8" cy="340.9" r="1.0" />
        <circle class="st0" cx="432.8" cy="347.7" r="1.0" />
        <circle class="st0" cx="426" cy="56" r="1.0" />
        <circle
          class="st0"
          cx="426"
          cy="110.3"
          r="1.0"
        />
        <circle class="st0" cx="426" cy="117.1" r="1.0" />
        <circle class="st0" cx="426" cy="123.9" r="1.0" />
        <circle class="st0" cx="426" cy="130.7" r="1.0" />
        <circle class="st0" cx="426" cy="137.4" r="1.0" />
        <circle
          class="st0"
          cx="426"
          cy="151"
          r="1.0"
        />
        <circle class="st0" cx="426" cy="157.8" r="1.0" />
        <circle class="st0" cx="426" cy="164.6" r="1.0" />
        <circle class="st0" cx="426" cy="171.3" r="1.0" />
        <circle class="st0 pin two" cx="426" cy="178.1" r="4.9" data-country="aus"/>
        <circle
          class="st0"
          cx="426"
          cy="184.9"
          r="1.0"
        />
        <circle class="st0" cx="426" cy="198.5" r="1.0" />
        <circle class="st0" cx="426" cy="212" r="1.0" />
        <circle class="st0" cx="426" cy="218.8" r="1.0" />
        <circle class="st0" cx="426" cy="225.6" r="1.0" />
        <circle class="st0" cx="426" cy="232.4" r="1.0" />
        <circle class="st0" cx="426" cy="239.2" r="1.0" />
        <circle class="st0" cx="426" cy="246" r="1.0" />
        <circle class="st0" cx="426" cy="252.7" r="1.0" />
        <circle class="st0" cx="426" cy="259.5" r="1.0" />
        <circle class="st0" cx="426" cy="266.3" r="1.0" />
        <circle class="st0" cx="426" cy="273.1" r="1.0" />
        <circle class="st0" cx="426" cy="279.9" r="1.0" />
        <circle class="st0" cx="426" cy="286.6" r="1.0" />
        <circle class="st0" cx="426" cy="293.4" r="1.0" />
        <circle class="st0" cx="426" cy="300.2" r="1.0" />
        <circle class="st0" cx="426" cy="320.6" r="1.0" />
        <circle class="st0" cx="426" cy="327.3" r="1.0" />
        <circle class="st0 pin two" cx="419.2" cy="117.1" r="4.9" data-country="nor"/>
        <circle class="st0" cx="419.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="419.2" cy="130.7" r="1.0" />
        <circle
          class="st0"
          cx="419.2"
          cy="137.4"
          r="1.0"
        />
        <circle class="st0 pin two" cx="419.2" cy="144.2" r="4.9" data-country="den"/>
        <circle class="st0" cx="419.2" cy="151" r="1.0" />
        <circle class="st0" cx="419.2" cy="157.8" r="1.0" />
        <circle class="st0 pin one" cx="419.2" cy="164.6" r="4.9" data-country="grm"/>
        <circle class="st0" cx="419.2" cy="171.3" r="1.0" />
        <circle class="st0" cx="419.2" cy="178.1" r="1.0" />
        <circle class="st0 pin one" cx="419.2" cy="184.9" r="4.9" data-country="itly"/>
        <circle class="st0" cx="419.2" cy="191.7" r="1.0" />
        <circle class="st0" cx="419.2" cy="205.3" r="1.0" />
        <circle class="st0" cx="419.2" cy="212" r="1.0" />
        <circle class="st0" cx="419.2" cy="218.8" r="1.0" />
        <circle class="st0" cx="419.2" cy="225.6" r="1.0" />
        <circle class="st0" cx="419.2" cy="232.4" r="1.0" />
        <circle class="st0" cx="419.2" cy="239.2" r="1.0" />
        <circle class="st0" cx="419.2" cy="246" r="1.0" />
        <circle class="st0" cx="419.2" cy="252.7" r="1.0" />
        <circle class="st0" cx="419.2" cy="259.5" r="1.0" />
        <circle class="st0" cx="419.2" cy="266.3" r="1.0" />
        <circle class="st0" cx="419.2" cy="273.1" r="1.0" />
        <circle class="st0" cx="419.2" cy="279.9" r="1.0" />
        <circle class="st0" cx="419.2" cy="286.6" r="1.0" />
        <circle class="st0" cx="419.2" cy="293.4" r="1.0" />
        <circle class="st0" cx="412.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="412.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="412.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="412.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="412.4" cy="164.6" r="1.0" />
        <circle
          class="st0 pin one"
          cx="412.4"
          cy="171.3"
          r="4.9"
          data-country="swt"
        />
        <circle class="st0" cx="412.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="412.4" cy="184.9" r="1.0" />
        <circle class="st0" cx="412.4" cy="205.3" r="1.0" />
        <circle class="st0" cx="412.4" cy="212" r="1.0" />
        <circle class="st0" cx="412.4" cy="218.8" r="1.0" />
        <circle class="st0" cx="412.4" cy="225.6" r="1.0" />
        <circle class="st0" cx="412.4" cy="232.4" r="1.0" />
        <circle class="st0" cx="412.4" cy="239.2" r="1.0" />
        <circle class="st0" cx="412.4" cy="246" r="1.0" />
        <circle class="st0" cx="412.4" cy="252.7" r="1.0" />
        <circle class="st0" cx="412.4" cy="259.5" r="1.0" />
        <circle class="st0" cx="412.4" cy="266.3" r="1.0" />
        <circle class="st0" cx="412.4" cy="273.1" r="1.0" />
        <circle class="st0 pin two" cx="405.6" cy="164.6" r="4.9" data-country="bel"/>
        <circle class="st0" cx="405.6" cy="171.3" r="1.0" />
        <circle class="st0" cx="405.6" cy="178.1" r="1.0" />
        <circle class="st0" cx="405.6" cy="184.9" r="1.0" />
        <circle class="st0" cx="405.6" cy="205.3" r="1.0" />
        <circle class="st0" cx="405.6" cy="212" r="1.0" />
        <circle class="st0" cx="405.6" cy="218.8" r="1.0" />
        <circle class="st0" cx="405.6" cy="225.6" r="1.0" />
        <circle class="st0" cx="405.6" cy="232.4" r="1.0" />
        <circle class="st0" cx="405.6" cy="239.2" r="1.0" />
        <circle class="st0" cx="405.6" cy="246" r="1.0" />
        <circle class="st0" cx="405.6" cy="252.7" r="1.0" />
        <circle class="st0" cx="405.6" cy="259.5" r="1.0" />
        <circle class="st0" cx="405.6" cy="266.3" r="1.0" />
        <circle class="st0" cx="405.6" cy="273.1" r="1.0" />
        <circle class="st0" cx="398.8" cy="164.6" r="1.0" />
        <circle class="st0 pin one" cx="398.8" cy="171.3" r="4.9" data-country="fra"/>
        <circle class="st0" cx="392.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="385.3" cy="171.3" r="1.0" />
        <circle
          class="st0"
          cx="398.8"
          cy="178.1"
          r="1.0"
        />
        <circle class="st0" cx="398.8" cy="184.9" r="1.0" />
        <circle class="st0" cx="398.8" cy="191.7" r="1.0" />
        <circle class="st0" cx="398.8" cy="205.3" r="1.0" />
        <circle class="st0" cx="398.8" cy="212" r="1.0" />
        <circle class="st0" cx="398.8" cy="218.8" r="1.0" />
        <circle class="st0" cx="398.8" cy="225.6" r="1.0" />
        <circle class="st0" cx="398.8" cy="232.4" r="1.0" />
        <circle class="st0" cx="398.8" cy="239.2" r="1.0" />
        <circle class="st0" cx="398.8" cy="246" r="1.0" />
        <circle class="st0" cx="398.8" cy="252.7" r="1.0" />
        <circle class="st0" cx="398.8" cy="259.5" r="1.0" />
        <circle class="st0" cx="398.8" cy="266.3" r="1.0" />
        <circle class="st0" cx="398.8" cy="273.1" r="1.0" />
        <circle class="st0" cx="392.1" cy="184.9" r="1.0" />
        <circle
          class="st0"
          cx="392.1"
          cy="191.7"
          r="1.0"
        />
        <circle class="st0" cx="392.1" cy="198.5" r="1.0" />
        <circle class="st0" cx="392.1" cy="205.3" r="1.0" />
        <circle class="st0" cx="392.1" cy="212" r="1.0" />
        <circle class="st0" cx="392.1" cy="218.8" r="1.0" />
        <circle class="st0" cx="392.1" cy="225.6" r="1.0" />
        <circle class="st0" cx="392.1" cy="232.4" r="1.0" />
        <circle class="st0" cx="392.1" cy="239.2" r="1.0" />
        <circle class="st0" cx="392.1" cy="246" r="1.0" />
        <circle class="st0" cx="392.1" cy="252.7" r="1.0" />
        <circle class="st0" cx="392.1" cy="259.5" r="1.0" />
        <circle class="st0" cx="392.1" cy="266.3" r="1.0" />
        <circle class="st0" cx="392.1" cy="273.1" r="1.0" />
        <circle class="st0" cx="385.3" cy="184.9" r="1.0" />
        <circle class="st0 pin one" cx="385.3" cy="191.7" r="4.9" data-country="spn"/>
        <circle class="st0" cx="385.3" cy="198.5" r="1.0" />
        <circle class="st0" cx="385.3" cy="205.3" r="1.0" />
        <circle class="st0" cx="385.3" cy="212" r="1.0" />
        <circle class="st0" cx="385.3" cy="218.8" r="1.0" />
        <circle class="st0" cx="385.3" cy="225.6" r="1.0" />
        <circle class="st0" cx="385.3" cy="232.4" r="1.0" />
        <circle class="st0" cx="385.3" cy="239.2" r="1.0" />
        <circle class="st0" cx="385.3" cy="246" r="1.0" />
        <circle class="st0" cx="385.3" cy="252.7" r="1.0" />
        <circle class="st0" cx="385.3" cy="259.5" r="1.0" />
        <circle class="st0" cx="385.3" cy="266.3" r="1.0" />
        <circle class="st0" cx="385.3" cy="273.1" r="1.0" />
        <circle class="st0" cx="385.3" cy="279.9" r="1.0" />
        <circle class="st0" cx="378.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="378.5" cy="191.7" r="1.0" />
        <circle class="st0" cx="378.5" cy="198.5" r="1.0" />
        <circle class="st0" cx="378.5" cy="212" r="1.0" />
        <circle class="st0" cx="378.5" cy="218.8" r="1.0" />
        <circle class="st0" cx="378.5" cy="225.6" r="1.0" />
        <circle class="st0" cx="378.5" cy="232.4" r="1.0" />
        <circle class="st0" cx="378.5" cy="239.2" r="1.0" />
        <circle class="st0" cx="378.5" cy="246" r="1.0" />
        <circle class="st0" cx="378.5" cy="252.7" r="1.0" />
        <circle class="st0" cx="378.5" cy="259.5" r="1.0" />
        <circle class="st0" cx="378.5" cy="266.3" r="1.0" />
        <circle class="st0" cx="378.5" cy="273.1" r="1.0" />
        <circle class="st0" cx="378.5" cy="279.9" r="1.0" />
        <circle class="st0" cx="371.7" cy="42.5" r="1.0" />
        <circle class="st0" cx="371.7" cy="225.6" r="1.0" />
        <circle class="st0" cx="371.7" cy="232.4" r="1.0" />
        <circle class="st0" cx="371.7" cy="239.2" r="1.0" />
        <circle class="st0" cx="371.7" cy="246" r="1.0" />
        <circle class="st0" cx="371.7" cy="252.7" r="1.0" />
        <circle class="st0" cx="371.7" cy="259.5" r="1.0" />
        <circle class="st0" cx="371.7" cy="266.3" r="1.0" />
        <circle class="st0" cx="371.7" cy="273.1" r="1.0" />
        <circle class="st0" cx="364.9" cy="42.5" r="1.0" />
        <circle class="st0" cx="364.9" cy="232.4" r="1.0" />
        <circle class="st0" cx="364.9" cy="239.2" r="1.0" />
        <circle class="st0" cx="364.9" cy="246" r="1.0" />
        <circle class="st0" cx="364.9" cy="252.7" r="1.0" />
        <circle class="st0" cx="364.9" cy="259.5" r="1.0" />
        <circle class="st0" cx="358.1" cy="42.5" r="1.0" />
        <circle class="st0" cx="358.1" cy="49.3" r="1.0" />
        <circle class="st1" cx="358.1" cy="239.2" r="1.0" />
        <circle class="st0" cx="351.4" cy="35.7" r="1.0" />
        <circle class="st0" cx="351.4" cy="42.5" r="1.0" />
        <circle class="st0" cx="351.4" cy="49.3" r="1.0" />
        <circle class="st0" cx="351.4" cy="56" r="1.0" />
        <circle class="st0" cx="351.4" cy="62.8" r="1.0" />
        <circle class="st0" cx="351.4" cy="69.6" r="1.0" />
        <circle class="st0" cx="351.4" cy="76.4" r="1.0" />
        <circle class="st0" cx="344.6" cy="35.7" r="1.0" />
        <circle class="st0" cx="344.6" cy="42.5" r="1.0" />
        <circle class="st0" cx="344.6" cy="49.3" r="1.0" />
        <circle class="st0" cx="344.6" cy="56" r="1.0" />
        <circle class="st0" cx="344.6" cy="62.8" r="1.0" />
        <circle class="st0" cx="344.6" cy="69.6" r="1.0" />
        <circle class="st0" cx="344.6" cy="76.4" r="1.0" />
        <circle class="st0" cx="344.6" cy="83.2" r="1.0" />
        <circle class="st0" cx="344.6" cy="90" r="1.0" />
        <circle class="st0" cx="344.6" cy="96.7" r="1.0" />
        <circle class="st0" cx="337.8" cy="28.9" r="1.0" />
        <circle class="st0" cx="337.8" cy="35.7" r="1.0" />
        <circle class="st0" cx="337.8" cy="42.5" r="1.0" />
        <circle class="st0" cx="337.8" cy="49.3" r="1.0" />
        <circle class="st0" cx="337.8" cy="56" r="1.0" />
        <circle class="st0" cx="337.8" cy="62.8" r="1.0" />
        <circle class="st0" cx="337.8" cy="69.6" r="1.0" />
        <circle class="st0" cx="337.8" cy="76.4" r="1.0" />
        <circle class="st0" cx="337.8" cy="83.2" r="1.0" />
        <circle class="st0" cx="337.8" cy="90" r="1.0" />
        <circle class="st0" cx="337.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="331" cy="28.9" r="1.0" />
        <circle class="st0" cx="331" cy="35.7" r="1.0" />
        <circle class="st0" cx="331" cy="42.5" r="1.0" />
        <circle class="st0" cx="331" cy="49.3" r="1.0" />
        <circle class="st0" cx="331" cy="56" r="1.0" />
        <circle class="st0" cx="331" cy="62.8" r="1.0" />
        <circle class="st0" cx="331" cy="69.6" r="1.0" />
        <circle class="st0" cx="331" cy="76.4" r="1.0" />
        <circle class="st0" cx="331" cy="83.2" r="1.0" />
        <circle class="st0" cx="331" cy="90" r="1.0" />
        <circle class="st0" cx="331" cy="96.7" r="1.0" />
        <circle class="st0" cx="331" cy="103.5" r="1.0" />
        <circle class="st0" cx="324.2" cy="28.9" r="1.0" />
        <circle class="st0" cx="324.2" cy="35.7" r="1.0" />
        <circle class="st0" cx="324.2" cy="42.5" r="1.0" />
        <circle class="st0" cx="324.2" cy="49.3" r="1.0" />
        <circle class="st0" cx="324.2" cy="56" r="1.0" />
        <circle class="st0" cx="324.2" cy="62.8" r="1.0" />
        <circle class="st0" cx="324.2" cy="69.6" r="1.0" />
        <circle class="st0" cx="324.2" cy="76.4" r="1.0" />
        <circle class="st0" cx="324.2" cy="83.2" r="1.0" />
        <circle class="st0" cx="324.2" cy="90" r="1.0" />
        <circle class="st0" cx="324.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="324.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="317.5" cy="28.9" r="1.0" />
        <circle class="st0" cx="317.5" cy="35.7" r="1.0" />
        <circle class="st0" cx="317.5" cy="42.5" r="1.0" />
        <circle class="st0" cx="317.5" cy="49.3" r="1.0" />
        <circle class="st0" cx="317.5" cy="56" r="1.0" />
        <circle class="st0" cx="317.5" cy="62.8" r="1.0" />
        <circle class="st0" cx="317.5" cy="69.6" r="1.0" />
        <circle class="st0" cx="317.5" cy="76.4" r="1.0" />
        <circle class="st0" cx="317.5" cy="83.2" r="1.0" />
        <circle class="st0" cx="317.5" cy="90" r="1.0" />
        <circle class="st0" cx="317.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="317.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="317.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="317.5" cy="300.2" r="1.0" />
        <circle class="st0" cx="317.5" cy="307" r="1.0" />
        <circle class="st0" cx="310.7" cy="28.9" r="1.0" />
        <circle class="st0" cx="310.7" cy="35.7" r="1.0" />
        <circle class="st0" cx="310.7" cy="42.5" r="1.0" />
        <circle class="st0" cx="310.7" cy="49.3" r="1.0" />
        <circle class="st0" cx="310.7" cy="56" r="1.0" />
        <circle class="st0" cx="310.7" cy="62.8" r="1.0" />
        <circle class="st0" cx="310.7" cy="69.6" r="1.0" />
        <circle class="st0" cx="310.7" cy="76.4" r="1.0" />
        <circle class="st0" cx="310.7" cy="83.2" r="1.0" />
        <circle class="st0" cx="310.7" cy="90" r="1.0" />
        <circle class="st0" cx="310.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="310.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="310.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="310.7" cy="300.2" r="1.0" />
        <circle class="st0" cx="310.7" cy="307" r="1.0" />
        <circle class="st0" cx="310.7" cy="313.8" r="1.0" />
        <circle class="st0" cx="310.7" cy="320.6" r="1.0" />
        <circle class="st0" cx="310.7" cy="327.3" r="1.0" />
        <circle class="st0" cx="303.9" cy="35.7" r="1.0" />
        <circle class="st0" cx="303.9" cy="42.5" r="1.0" />
        <circle class="st0" cx="303.9" cy="49.3" r="1.0" />
        <circle class="st0" cx="303.9" cy="56" r="1.0" />
        <circle class="st0" cx="303.9" cy="62.8" r="1.0" />
        <circle class="st0" cx="303.9" cy="69.6" r="1.0" />
        <circle class="st0" cx="303.9" cy="76.4" r="1.0" />
        <circle class="st0" cx="303.9" cy="83.2" r="1.0" />
        <circle class="st0" cx="303.9" cy="90" r="1.0" />
        <circle class="st0" cx="303.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="303.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="303.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="303.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="303.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="303.9" cy="300.2" r="1.0" />
        <circle class="st0" cx="303.9" cy="307" r="1.0" />
        <circle class="st0" cx="303.9" cy="313.8" r="1.0" />
        <circle class="st0" cx="303.9" cy="320.6" r="1.0" />
        <circle class="st0" cx="303.9" cy="327.3" r="1.0" />
        <circle class="st0" cx="303.9" cy="334.1" r="1.0" />
        <circle class="st0" cx="303.9" cy="340.9" r="1.0" />
        <circle class="st0" cx="297.1" cy="35.7" r="1.0" />
        <circle class="st0" cx="297.1" cy="42.5" r="1.0" />
        <circle class="st0" cx="297.1" cy="49.3" r="1.0" />
        <circle class="st0" cx="297.1" cy="56" r="1.0" />
        <circle class="st0" cx="297.1" cy="62.8" r="1.0" />
        <circle class="st0" cx="297.1" cy="69.6" r="1.0" />
        <circle class="st0" cx="297.1" cy="76.4" r="1.0" />
        <circle class="st0" cx="297.1" cy="83.2" r="1.0" />
        <circle class="st0" cx="297.1" cy="90" r="1.0" />
        <circle class="st0" cx="297.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="297.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="297.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="297.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="297.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="297.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="297.1" cy="293.4" r="1.0" />
        <circle class="st0" cx="297.1" cy="300.2" r="1.0" />
        <circle class="st0" cx="297.1" cy="307" r="1.0" />
        <circle class="st0" cx="297.1" cy="313.8" r="1.0" />
        <circle
          class="st0"
          cx="297.1"
          cy="320.6"
          r="1.0"
        />
        <circle class="st0" cx="297.1" cy="327.3" r="1.0" />
        <circle class="st0" cx="297.1" cy="334.1" r="1.0" />
        <circle class="st0" cx="297.1" cy="340.9" r="1.0" />
        <circle class="st0" cx="290.3" cy="35.7" r="1.0" />
        <circle class="st0" cx="290.3" cy="42.5" r="1.0" />
        <circle class="st0" cx="290.3" cy="49.3" r="1.0" />
        <circle class="st0" cx="290.3" cy="56" r="1.0" />
        <circle class="st0" cx="290.3" cy="62.8" r="1.0" />
        <circle class="st0" cx="290.3" cy="69.6" r="1.0" />
        <circle class="st0" cx="290.3" cy="76.4" r="1.0" />
        <circle class="st0" cx="290.3" cy="83.2" r="1.0" />
        <circle class="st0" cx="290.3" cy="90" r="1.0" />
        <circle class="st0" cx="290.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="290.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="290.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="290.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="290.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="290.3" cy="130.7" r="1.0" />
        <circle class="st0" cx="290.3" cy="293.4" r="1.0" />
        <circle class="st0" cx="290.3" cy="300.2" r="1.0" />
        <circle class="st0" cx="290.3" cy="307" r="1.0" />
        <circle class="st0" cx="290.3" cy="313.8" r="1.0" />
        <circle class="st0" cx="290.3" cy="320.6" r="1.0" />
        <circle class="st0" cx="290.3" cy="327.3" r="1.0" />
        <circle class="st0" cx="290.3" cy="334.1" r="1.0" />
        <circle class="st0" cx="290.3" cy="340.9" r="1.0" />
        <circle class="st0" cx="290.3" cy="347.7" r="1.0" />
        <circle class="st0" cx="283.5" cy="35.7" r="1.0" />
        <circle class="st0" cx="283.5" cy="42.5" r="1.0" />
        <circle class="st0" cx="283.5" cy="49.3" r="1.0" />
        <circle class="st0" cx="283.5" cy="56" r="1.0" />
        <circle class="st0" cx="283.5" cy="62.8" r="1.0" />
        <circle class="st0" cx="283.5" cy="69.6" r="1.0" />
        <circle class="st0" cx="283.5" cy="76.4" r="1.0" />
        <circle class="st0" cx="283.5" cy="83.2" r="1.0" />
        <circle class="st0" cx="283.5" cy="90" r="1.0" />
        <circle class="st0" cx="283.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="283.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="283.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="283.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="283.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="283.5" cy="279.9" r="1.0" />
        <circle class="st0" cx="283.5" cy="286.6" r="1.0" />
        <circle class="st0" cx="283.5" cy="293.4" r="1.0" />
        <circle class="st0" cx="283.5" cy="300.2" r="1.0" />
        <circle class="st0" cx="283.5" cy="307" r="1.0" />
        <circle class="st0" cx="283.5" cy="313.8" r="1.0" />
        <circle class="st0" cx="283.5" cy="320.6" r="1.0" />
        <circle class="st0" cx="283.5" cy="327.3" r="1.0" />
        <circle class="st0" cx="283.5" cy="334.1" r="1.0" />
        <circle class="st0" cx="283.5" cy="340.9" r="1.0" />
        <circle class="st0" cx="283.5" cy="347.7" r="1.0" />
        <circle class="st0" cx="283.5" cy="354.5" r="1.0" />
        <circle class="st0" cx="283.5" cy="361.3" r="1.0" />
        <circle class="st0" cx="276.8" cy="42.5" r="1.0" />
        <circle class="st0" cx="276.8" cy="49.3" r="1.0" />
        <circle class="st0" cx="276.8" cy="56" r="1.0" />
        <circle class="st0" cx="276.8" cy="62.8" r="1.0" />
        <circle class="st0" cx="276.8" cy="69.6" r="1.0" />
        <circle class="st0" cx="276.8" cy="76.4" r="1.0" />
        <circle class="st0" cx="276.8" cy="83.2" r="1.0" />
        <circle class="st0" cx="276.8" cy="90" r="1.0" />
        <circle class="st0" cx="276.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="276.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="276.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="276.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="276.8" cy="279.9" r="1.0" />
        <circle class="st0" cx="276.8" cy="286.6" r="1.0" />
        <circle class="st0" cx="276.8" cy="293.4" r="1.0" />
        <circle class="st0" cx="276.8" cy="300.2" r="1.0" />
        <circle class="st0" cx="276.8" cy="307" r="1.0" />
        <circle class="st0" cx="276.8" cy="313.8" r="1.0" />
        <circle class="st0" cx="276.8" cy="320.6" r="1.0" />
        <circle class="st0" cx="276.8" cy="327.3" r="1.0" />
        <circle class="st0" cx="276.8" cy="334.1" r="1.0" />
        <circle class="st0" cx="276.8" cy="340.9" r="1.0" />
        <circle class="st0" cx="276.8" cy="347.7" r="1.0" />
        <circle class="st0" cx="276.8" cy="354.5" r="1.0" />
        <circle class="st0" cx="276.8" cy="361.3" r="1.0" />
        <circle class="st0" cx="276.8" cy="368" r="1.0" />
        <circle class="st0" cx="270" cy="42.5" r="1.0" />
        <circle class="st0" cx="270" cy="49.3" r="1.0" />
        <circle class="st0" cx="270" cy="56" r="1.0" />
        <circle class="st0" cx="270" cy="62.8" r="1.0" />
        <circle class="st0" cx="270" cy="69.6" r="1.0" />
        <circle class="st0" cx="270" cy="76.4" r="1.0" />
        <circle class="st0" cx="270" cy="157.8" r="1.0" />
        <circle class="st0" cx="270" cy="164.6" r="1.0" />
        <circle class="st0" cx="270" cy="171.3" r="1.0" />
        <circle class="st0" cx="270" cy="279.9" r="1.0" />
        <circle class="st0" cx="270" cy="286.6" r="1.0" />
        <circle class="st0" cx="270" cy="293.4" r="1.0" />
        <circle class="st0" cx="270" cy="300.2" r="1.0" />
        <circle class="st0" cx="270" cy="307" r="1.0" />
        <circle class="st0" cx="270" cy="313.8" r="1.0" />
        <circle class="st0" cx="270" cy="320.6" r="1.0" />
        <circle class="st0" cx="270" cy="327.3" r="1.0" />
        <circle class="st0" cx="270" cy="334.1" r="1.0" />
        <circle class="st0" cx="270" cy="340.9" r="1.0" />
        <circle class="st0" cx="270" cy="347.7" r="1.0" />
        <circle class="st0" cx="270" cy="354.5" r="1.0" />
        <circle class="st0" cx="270" cy="361.3" r="1.0" />
        <circle class="st0" cx="270" cy="368" r="1.0" />
        <circle class="st0" cx="270" cy="374.8" r="1.0" />
        <circle class="st0" cx="263.2" cy="42.5" r="1.0" />
        <circle class="st0" cx="263.2" cy="49.3" r="1.0" />
        <circle class="st0" cx="263.2" cy="56" r="1.0" />
        <circle class="st0" cx="263.2" cy="62.8" r="1.0" />
        <circle class="st0" cx="263.2" cy="69.6" r="1.0" />
        <circle class="st0" cx="263.2" cy="151" r="1.0" />
        <circle class="st0" cx="263.2" cy="157.8" r="1.0" />
        <circle class="st0" cx="263.2" cy="171.3" r="1.0" />
        <circle class="st0" cx="263.2" cy="273.1" r="1.0" />
        <circle class="st0" cx="263.2" cy="279.9" r="1.0" />
        <circle class="st0" cx="263.2" cy="286.6" r="1.0" />
        <circle class="st0 pin two" cx="263.2" cy="293.4" r="4.9" data-country="bra" />
        <circle class="st0" cx="263.2" cy="300.2" r="1.0" />
        <circle class="st0" cx="263.2" cy="307" r="1.0" />
        <circle class="st0" cx="263.2" cy="313.8" r="1.0" />
        <circle class="st0" cx="263.2" cy="320.6" r="1.0" />
        <circle class="st0" cx="263.2" cy="327.3" r="1.0" />
        <circle class="st0" cx="263.2" cy="334.1" r="1.0" />
        <circle class="st0" cx="263.2" cy="340.9" r="1.0" />
        <circle class="st0" cx="263.2" cy="347.7" r="1.0" />
        <circle class="st0" cx="263.2" cy="354.5" r="1.0" />
        <circle class="st0" cx="263.2" cy="361.3" r="1.0" />
        <circle class="st0" cx="263.2" cy="368" r="1.0" />
        <circle class="st0" cx="263.2" cy="374.8" r="1.0" />
        <circle class="st0" cx="263.2" cy="381.6" r="1.0" />
        <circle class="st0" cx="256.4" cy="35.7" r="1.0" />
        <circle class="st0" cx="256.4" cy="42.5" r="1.0" />
        <circle class="st0" cx="256.4" cy="49.3" r="1.0" />
        <circle class="st0" cx="256.4" cy="56" r="1.0" />
        <circle class="st0" cx="256.4" cy="62.8" r="1.0" />
        <circle class="st0" cx="256.4" cy="69.6" r="1.0" />
        <circle class="st0" cx="256.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="256.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="256.4" cy="151" r="1.0" />
        <circle class="st0" cx="256.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="256.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="256.4" cy="266.3" r="1.0" />
        <circle class="st0" cx="256.4" cy="273.1" r="1.0" />
        <circle class="st0" cx="256.4" cy="279.9" r="1.0" />
        <circle class="st0" cx="256.4" cy="286.6" r="1.0" />
        <circle class="st0" cx="256.4" cy="293.4" r="1.0" />
        <circle class="st0" cx="256.4" cy="300.2" r="1.0" />
        <circle class="st0" cx="256.4" cy="307" r="1.0" />
        <circle class="st0" cx="256.4" cy="313.8" r="1.0" />
        <circle class="st0" cx="256.4" cy="320.6" r="1.0" />
        <circle class="st0" cx="256.4" cy="327.3" r="1.0" />
        <circle class="st0" cx="256.4" cy="334.1" r="1.0" />
        <circle class="st0" cx="256.4" cy="340.9" r="1.0" />
        <circle class="st0" cx="256.4" cy="347.7" r="1.0" />
        <circle class="st0" cx="256.4" cy="354.5" r="1.0" />
        <circle class="st0" cx="256.4" cy="361.3" r="1.0" />
        <circle class="st0" cx="256.4" cy="368" r="1.0" />
        <circle class="st0" cx="256.4" cy="374.8" r="1.0" />
        <circle class="st0" cx="256.4" cy="381.6" r="1.0" />
        <circle class="st1" cx="256.4" cy="388.4" r="1.0" />
        <circle class="st0" cx="249.6" cy="35.7" r="1.0" />
        <circle class="st0" cx="249.6" cy="42.5" r="1.0" />
        <circle class="st0" cx="249.6" cy="49.3" r="1.0" />
        <circle class="st0" cx="249.6" cy="56" r="1.0" />
        <circle class="st0" cx="249.6" cy="62.8" r="1.0" />
        <circle class="st0" cx="249.6" cy="69.6" r="1.0" />
        <circle class="st0" cx="249.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="249.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="249.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="249.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="249.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="249.6" cy="144.2" r="1.0" />
        <circle class="st0" cx="249.6" cy="151" r="1.0" />
        <circle class="st0" cx="249.6" cy="157.8" r="1.0" />
        <circle class="st0" cx="249.6" cy="171.3" r="1.0" />
        <circle class="st0" cx="249.6" cy="178.1" r="1.0" />
        <circle class="st0" cx="249.6" cy="246" r="1.0" />
        <circle class="st0" cx="249.6" cy="266.3" r="1.0" />
        <circle class="st0" cx="249.6" cy="273.1" r="1.0" />
        <circle class="st0" cx="249.6" cy="279.9" r="1.0" />
        <circle class="st0" cx="249.6" cy="286.6" r="1.0" />
        <circle class="st0" cx="249.6" cy="293.4" r="1.0" />
        <circle class="st1" cx="249.6" cy="300.2" r="1.0" />
        <circle class="st0" cx="249.6" cy="307" r="1.0" />
        <circle class="st0" cx="249.6" cy="313.8" r="1.0" />
        <circle class="st0" cx="249.6" cy="320.6" r="1.0" />
        <circle class="st0" cx="249.6" cy="327.3" r="1.0" />
        <circle class="st0" cx="249.6" cy="334.1" r="1.0" />
        <circle class="st0" cx="249.6" cy="340.9" r="1.0" />
        <circle class="st0" cx="249.6" cy="347.7" r="1.0" />
        <circle class="st0" cx="249.6" cy="354.5" r="1.0" />
        <circle class="st0" cx="249.6" cy="361.3" r="1.0" />
        <circle class="st0" cx="249.6" cy="368" r="1.0" />
        <circle class="st0" cx="249.6" cy="374.8" r="1.0" />
        <circle class="st0" cx="249.6" cy="381.6" r="1.0" />
        <circle class="st0" cx="249.6" cy="388.4" r="1.0" />
        <circle class="st0" cx="249.6" cy="395.2" r="1.0" />
        <circle class="st0" cx="249.6" cy="429.1" r="1.0" />
        <circle class="st0" cx="242.8" cy="35.7" r="1.0" />
        <circle class="st0" cx="242.8" cy="42.5" r="1.0" />
        <circle class="st0" cx="242.8" cy="56" r="1.0" />
        <circle class="st0" cx="242.8" cy="62.8" r="1.0" />
        <circle class="st0" cx="242.8" cy="69.6" r="1.0" />
        <circle class="st0" cx="242.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="242.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="242.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="242.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="242.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="242.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="242.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="242.8" cy="151" r="1.0" />
        <circle class="st0" cx="242.8" cy="157.8" r="1.0" />
        <circle class="st0" cx="242.8" cy="164.6" r="1.0" />
        <circle class="st0" cx="242.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="242.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="242.8" cy="246" r="1.0" />
        <circle class="st0" cx="242.8" cy="266.3" r="1.0" />
        <circle class="st0" cx="242.8" cy="273.1" r="1.0" />
        <circle class="st0" cx="242.8" cy="279.9" r="1.0" />
        <circle class="st0" cx="242.8" cy="286.6" r="1.0" />
        <circle class="st0" cx="242.8" cy="293.4" r="1.0" />
        <circle class="st0" cx="242.8" cy="300.2" r="1.0" />
        <circle class="st0" cx="242.8" cy="307" r="1.0" />
        <circle class="st0" cx="242.8" cy="313.8" r="1.0" />
        <circle class="st0" cx="242.8" cy="320.6" r="1.0" />
        <circle class="st0" cx="242.8" cy="327.3" r="1.0" />
        <circle class="st0" cx="242.8" cy="334.1" r="1.0" />
        <circle class="st0" cx="242.8" cy="340.9" r="1.0" />
        <circle class="st0" cx="242.8" cy="347.7" r="1.0" />
        <circle class="st0" cx="242.8" cy="354.5" r="1.0" />
        <circle class="st0" cx="242.8" cy="361.3" r="1.0" />
        <circle class="st0" cx="242.8" cy="368" r="1.0" />
        <circle class="st0" cx="242.8" cy="374.8" r="1.0" />
        <circle class="st0" cx="242.8" cy="381.6" r="1.0" />
        <circle class="st0" cx="242.8" cy="388.4" r="1.0" />
        <circle class="st0" cx="242.8" cy="395.2" r="1.0" />
        <circle class="st0" cx="242.8" cy="402" r="1.0" />
        <circle class="st0" cx="242.8" cy="408.7" r="1.0" />
        <circle class="st0" cx="242.8" cy="422.3" r="1.0" />
        <circle class="st0" cx="242.8" cy="429.1" r="1.0" />
        <circle class="st0" cx="236.1" cy="35.7" r="1.0" />
        <circle class="st0" cx="236.1" cy="42.5" r="1.0" />
        <circle class="st0" cx="236.1" cy="49.3" r="1.0" />
        <circle class="st0" cx="236.1" cy="56" r="1.0" />
        <circle class="st0" cx="236.1" cy="62.8" r="1.0" />
        <circle class="st0" cx="236.1" cy="90" r="1.0" />
        <circle class="st0" cx="236.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="236.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="236.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="236.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="236.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="236.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="236.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="236.1" cy="151" r="1.0" />
        <circle class="st0" cx="236.1" cy="157.8" r="1.0" />
        <circle class="st0" cx="236.1" cy="164.6" r="1.0" />
        <circle class="st0" cx="236.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="236.1" cy="178.1" r="1.0" />
        <circle class="st1" cx="236.1" cy="184.9" r="1.0" />
        <circle class="st0" cx="236.1" cy="239.2" r="1.0" />
        <circle class="st0" cx="236.1" cy="246" r="1.0" />
        <circle class="st0" cx="236.1" cy="259.5" r="1.0" />
        <circle class="st0" cx="236.1" cy="266.3" r="1.0" />
        <circle class="st0" cx="236.1" cy="273.1" r="1.0" />
        <circle class="st0" cx="236.1" cy="279.9" r="1.0" />
        <circle class="st0" cx="236.1" cy="286.6" r="1.0" />
        <circle class="st0" cx="236.1" cy="293.4" r="1.0" />
        <circle class="st0" cx="236.1" cy="300.2" r="1.0" />
        <circle class="st0" cx="236.1" cy="307" r="1.0" />
        <circle class="st0" cx="236.1" cy="313.8" r="1.0" />
        <circle class="st0" cx="236.1" cy="320.6" r="1.0" />
        <circle class="st0" cx="236.1" cy="327.3" r="1.0" />
        <circle class="st0" cx="236.1" cy="354.5" r="1.0" />
        <circle class="st0" cx="236.1" cy="361.3" r="1.0" />
        <circle class="st0" cx="236.1" cy="368" r="1.0" />
        <circle class="st0" cx="236.1" cy="374.8" r="1.0" />
        <circle class="st0" cx="236.1" cy="381.6" r="1.0" />
        <circle class="st0" cx="236.1" cy="388.4" r="1.0" />
        <circle class="st0" cx="236.1" cy="395.2" r="1.0" />
        <circle class="st0" cx="236.1" cy="402" r="1.0" />
        <circle class="st0" cx="236.1" cy="408.7" r="1.0" />
        <circle class="st0" cx="236.1" cy="415.5" r="1.0" />
        <circle class="st0" cx="236.1" cy="422.3" r="1.0" />
        <circle class="st0" cx="236.1" cy="429.1" r="1.0" />
        <circle class="st0" cx="229.3" cy="35.7" r="1.0" />
        <circle class="st0" cx="229.3" cy="42.5" r="1.0" />
        <circle class="st0" cx="229.3" cy="49.3" r="1.0" />
        <circle class="st0" cx="229.3" cy="90" r="1.0" />
        <circle class="st0" cx="229.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="229.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="229.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="229.3" cy="130.7" r="1.0" />
        <circle class="st0" cx="229.3" cy="137.4" r="1.0" />
        <circle class="st0" cx="229.3" cy="144.2" r="1.0" />
        <circle class="st0" cx="229.3" cy="151" r="1.0" />
        <circle class="st0" cx="229.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="229.3" cy="164.6" r="1.0" />
        <circle class="st0" cx="229.3" cy="171.3" r="1.0" />
        <circle class="st0" cx="229.3" cy="178.1" r="1.0" />
        <circle class="st0" cx="229.3" cy="184.9" r="1.0" />
        <circle class="st0" cx="229.3" cy="191.7" r="1.0" />
        <circle class="st0" cx="229.3" cy="239.2" r="1.0" />
        <circle class="st0" cx="229.3" cy="246" r="1.0" />
        <circle class="st0" cx="229.3" cy="266.3" r="1.0" />
        <circle class="st0" cx="229.3" cy="273.1" r="1.0" />
        <circle class="st0" cx="229.3" cy="279.9" r="1.0" />
        <circle class="st0" cx="229.3" cy="286.6" r="1.0" />
        <circle class="st0" cx="229.3" cy="293.4" r="1.0" />
        <circle class="st0" cx="229.3" cy="300.2" r="1.0" />
        <circle class="st0" cx="229.3" cy="307" r="1.0" />
        <circle class="st0" cx="229.3" cy="313.8" r="1.0" />
        <circle class="st0" cx="229.3" cy="320.6" r="1.0" />
        <circle class="st0" cx="229.3" cy="388.4" r="1.0" />
        <circle class="st0" cx="229.3" cy="395.2" r="1.0" />
        <circle class="st0" cx="229.3" cy="402" r="1.0" />
        <circle class="st0" cx="229.3" cy="408.7" r="1.0" />
        <circle class="st0" cx="229.3" cy="415.5" r="1.0" />
        <circle class="st0" cx="229.3" cy="422.3" r="1.0" />
        <circle class="st0" cx="222.5" cy="35.7" r="1.0" />
        <circle class="st0" cx="222.5" cy="42.5" r="1.0" />
        <circle class="st0" cx="222.5" cy="49.3" r="1.0" />
        <circle class="st0" cx="222.5" cy="56" r="1.0" />
        <circle class="st0" cx="222.5" cy="90" r="1.0" />
        <circle class="st0" cx="222.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="222.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="222.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="222.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="222.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="222.5" cy="137.4" r="1.0" />
        <circle class="st0" cx="222.5" cy="151" r="1.0" />
        <circle class="st0" cx="222.5" cy="157.8" r="1.0" />
        <circle class="st0" cx="222.5" cy="164.6" r="1.0" />
        <circle class="st0" cx="222.5" cy="171.3" r="1.0" />
        <circle class="st0" cx="222.5" cy="178.1" r="1.0" />
        <circle class="st0" cx="222.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="222.5" cy="191.7" r="1.0" />
        <circle class="st0" cx="222.5" cy="198.5" r="1.0" />
        <circle class="st0" cx="222.5" cy="205.3" r="1.0" />
        <circle class="st0" cx="222.5" cy="239.2" r="1.0" />
        <circle class="st0" cx="222.5" cy="246" r="1.0" />
        <circle class="st0" cx="222.5" cy="266.3" r="1.0" />
        <circle class="st0" cx="222.5" cy="273.1" r="1.0" />
        <circle class="st0" cx="222.5" cy="279.9" r="1.0" />
        <circle class="st0" cx="222.5" cy="286.6" r="1.0" />
        <circle class="st0" cx="222.5" cy="293.4" r="1.0" />
        <circle class="st0" cx="222.5" cy="300.2" r="1.0" />
        <circle class="st0" cx="222.5" cy="307" r="1.0" />
        <circle class="st0" cx="222.5" cy="313.8" r="1.0" />
        <circle class="st0" cx="215.7" cy="35.7" r="1.0" />
        <circle class="st0" cx="215.7" cy="42.5" r="1.0" />
        <circle class="st0" cx="215.7" cy="49.3" r="1.0" />
        <circle class="st0" cx="215.7" cy="56" r="1.0" />
        <circle class="st0" cx="215.7" cy="62.8" r="1.0" />
        <circle class="st0" cx="215.7" cy="76.4" r="1.0" />
        <circle class="st0" cx="215.7" cy="83.2" r="1.0" />
        <circle class="st0" cx="215.7" cy="90" r="1.0" />
        <circle class="st0" cx="215.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="215.7" cy="164.6" r="1.0" />
        <circle class="st0" cx="215.7" cy="171.3" r="1.0" />
        <circle class="st0" cx="215.7" cy="178.1" r="1.0" />
        <circle class="st0" cx="215.7" cy="184.9" r="1.0" />
        <circle class="st0" cx="215.7" cy="191.7" r="1.0" />
        <circle class="st0" cx="215.7" cy="198.5" r="1.0" />
        <circle class="st0" cx="215.7" cy="205.3" r="1.0" />
        <circle class="st0" cx="215.7" cy="212" r="1.0" />
        <circle class="st0" cx="215.7" cy="218.8" r="1.0" />
        <circle class="st0" cx="215.7" cy="225.6" r="1.0" />
        <circle class="st0" cx="215.7" cy="239.2" r="1.0" />
        <circle class="st0" cx="215.7" cy="266.3" r="1.0" />
        <circle class="st0" cx="215.7" cy="273.1" r="1.0" />
        <circle class="st0" cx="215.7" cy="286.6" r="1.0" />
        <circle class="st0" cx="215.7" cy="293.4" r="1.0" />
        <circle class="st0" cx="215.7" cy="300.2" r="1.0" />
        <circle class="st0" cx="208.9" cy="35.7" r="1.0" />
        <circle class="st0" cx="208.9" cy="42.5" r="1.0" />
        <circle class="st0" cx="208.9" cy="49.3" r="1.0" />
        <circle class="st0" cx="208.9" cy="56" r="1.0" />
        <circle class="st0" cx="208.9" cy="62.8" r="1.0" />
        <circle class="st0" cx="208.9" cy="76.4" r="1.0" />
        <circle class="st0" cx="208.9" cy="83.2" r="1.0" />
        <circle class="st0" cx="208.9" cy="90" r="1.0" />
        <circle class="st0" cx="208.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="208.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="208.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="208.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="208.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="208.9" cy="151" r="1.0" />
        <circle class="st0" cx="208.9" cy="157.8" r="1.0" />
        <circle class="st0" cx="208.9" cy="164.6" r="1.0" />
        <circle class="st0" cx="208.9" cy="171.3" r="1.0" />
        <circle class="st0" cx="208.9" cy="178.1" r="1.0" />
        <circle class="st0" cx="208.9" cy="184.9" r="1.0" />
        <circle class="st0" cx="208.9" cy="191.7" r="1.0" />
        <circle class="st0" cx="208.9" cy="198.5" r="1.0" />
        <circle class="st0" cx="208.9" cy="205.3" r="1.0" />
        <circle class="st0" cx="208.9" cy="212" r="1.0" />
        <circle class="st0" cx="208.9" cy="218.8" r="1.0" />
        <circle class="st0" cx="208.9" cy="252.7" r="1.0" />
        <circle class="st0" cx="208.9" cy="259.5" r="1.0" />
        <circle class="st0" cx="208.9" cy="266.3" r="1.0" />
        <circle class="st0" cx="202.2" cy="42.5" r="1.0" />
        <circle class="st0" cx="202.2" cy="49.3" r="1.0" />
        <circle class="st0" cx="202.2" cy="56" r="1.0" />
        <circle class="st0" cx="202.2" cy="62.8" r="1.0" />
        <circle class="st0" cx="202.2" cy="76.4" r="1.0" />
        <circle class="st0" cx="202.2" cy="83.2" r="1.0" />
        <circle class="st0" cx="202.2" cy="90" r="1.0" />
        <circle class="st0" cx="202.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="202.2" cy="103.5" r="1.0" />
        <circle class="st1" cx="202.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="202.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="202.2" cy="151" r="1.0" />
        <circle class="st0" cx="202.2" cy="157.8" r="1.0" />
        <circle class="st0" cx="202.2" cy="164.6" r="1.0" />
        <circle class="st0" cx="202.2" cy="171.3" r="1.0" />
        <circle class="st0" cx="202.2" cy="178.1" r="1.0" />
        <circle class="st0" cx="202.2" cy="184.9" r="1.0" />
        <circle class="st0" cx="202.2" cy="191.7" r="1.0" />
        <circle class="st0" cx="202.2" cy="198.5" r="1.0" />
        <circle class="st0" cx="202.2" cy="205.3" r="1.0" />
        <circle class="st0" cx="202.2" cy="212" r="1.0" />
        <circle class="st0" cx="202.2" cy="218.8" r="1.0" />
        <circle class="st0" cx="202.2" cy="239.2" r="1.0" />
        <circle class="st0" cx="202.2" cy="252.7" r="1.0" />
        <circle class="st0" cx="202.2" cy="259.5" r="1.0" />
        <circle class="st0" cx="202.2" cy="266.3" r="1.0" />
        <circle class="st0" cx="195.4" cy="42.5" r="1.0" />
        <circle class="st0" cx="195.4" cy="49.3" r="1.0" />
        <circle class="st0" cx="195.4" cy="56" r="1.0" />
        <circle class="st0" cx="195.4" cy="69.6" r="1.0" />
        <circle class="st0" cx="195.4" cy="76.4" r="1.0" />
        <circle class="st0" cx="195.4" cy="83.2" r="1.0" />
        <circle class="st0" cx="195.4" cy="90" r="1.0" />
        <circle class="st0" cx="195.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="195.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="195.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="195.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="195.4" cy="151" r="1.0" />
        <circle class="st0" cx="195.4" cy="157.8" r="1.0" />
        <circle class="st0" cx="195.4" cy="164.6" r="1.0" />
        <circle class="st0" cx="195.4" cy="171.3" r="1.0" />
        <circle class="st0" cx="195.4" cy="178.1" r="1.0" />
        <circle class="st0" cx="195.4" cy="184.9" r="1.0" />
        <circle class="st0" cx="195.4" cy="191.7" r="1.0" />
        <circle class="st0" cx="195.4" cy="198.5" r="1.0" />
        <circle class="st0" cx="195.4" cy="205.3" r="1.0" />
        <circle class="st0" cx="195.4" cy="212" r="1.0" />
        <circle class="st0" cx="195.4" cy="218.8" r="1.0" />
        <circle class="st0" cx="195.4" cy="239.2" r="1.0" />
        <circle class="st0" cx="195.4" cy="246" r="1.0" />
        <circle class="st0" cx="195.4" cy="252.7" r="1.0" />
        <circle class="st0" cx="195.4" cy="259.5" r="1.0" />
        <circle class="st0" cx="188.6" cy="42.5" r="1.0" />
        <circle class="st0" cx="188.6" cy="49.3" r="1.0" />
        <circle class="st0" cx="188.6" cy="56" r="1.0" />
        <circle class="st0" cx="188.6" cy="69.6" r="1.0" />
        <circle class="st0" cx="188.6" cy="83.2" r="1.0" />
        <circle class="st0" cx="188.6" cy="96.7" r="1.0" />
        <circle class="st0" cx="188.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="188.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="188.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="188.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="188.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="188.6" cy="144.2" r="1.0" />
        <circle class="st0" cx="188.6" cy="151" r="1.0" />
        <circle class="st0" cx="188.6" cy="157.8" r="1.0" />
        <circle class="st0" cx="188.6" cy="164.6" r="1.0" />
        <circle class="st0" cx="188.6" cy="171.3" r="1.0" />
        <circle class="st0" cx="188.6" cy="178.1" r="1.0" />
        <circle class="st0" cx="188.6" cy="184.9" r="1.0" />
        <circle class="st0" cx="188.6" cy="191.7" r="1.0" />
        <circle class="st0" cx="188.6" cy="198.5" r="1.0" />
        <circle class="st0" cx="188.6" cy="205.3" r="1.0" />
        <circle class="st1" cx="188.6" cy="212" r="1.0" />
        <circle class="st0" cx="188.6" cy="218.8" r="1.0" />
        <circle class="st0" cx="188.6" cy="246" r="1.0" />
        <circle class="st0" cx="188.6" cy="252.7" r="1.0" />
        <circle class="st0" cx="181.8" cy="49.3" r="1.0" />
        <circle class="st0" cx="181.8" cy="62.8" r="1.0" />
        <circle class="st0" cx="181.8" cy="83.2" r="1.0" />
        <circle class="st0" cx="181.8" cy="90" r="1.0" />
        <circle class="st0" cx="181.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="181.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="181.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="181.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="181.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="181.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="181.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="181.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="181.8" cy="151" r="1.0" />
        <circle class="st0" cx="181.8" cy="157.8" r="1.0" />
        <circle class="st0" cx="181.8" cy="164.6" r="1.0" />
        <circle class="st0" cx="181.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="181.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="181.8" cy="184.9" r="1.0" />
        <circle class="st0" cx="181.8" cy="191.7" r="1.0" />
        <circle class="st0" cx="181.8" cy="198.5" r="1.0" />
        <circle class="st0" cx="181.8" cy="205.3" r="1.0" />
        <circle class="st0" cx="181.8" cy="212" r="1.0" />
        <circle class="st0" cx="181.8" cy="218.8" r="1.0" />
        <circle class="st0" cx="181.8" cy="246" r="1.0" />
        <circle class="st0" cx="181.8" cy="252.7" r="1.0" />
        <circle class="st0" cx="175" cy="56" r="1.0" />
        <circle class="st0" cx="175" cy="69.6" r="1.0" />
        <circle class="st0" cx="175" cy="83.2" r="1.0" />
        <circle class="st0" cx="175" cy="90" r="1.0" />
        <circle class="st0" cx="175" cy="96.7" r="1.0" />
        <circle class="st0" cx="175" cy="103.5" r="1.0" />
        <circle class="st0" cx="175" cy="110.3" r="1.0" />
        <circle class="st0" cx="175" cy="117.1" r="1.0" />
        <circle class="st0" cx="175" cy="123.9" r="1.0" />
        <circle class="st0" cx="175" cy="130.7" r="1.0" />
        <circle class="st0" cx="175" cy="137.4" r="1.0" />
        <circle class="st0" cx="175" cy="144.2" r="1.0" />
        <circle class="st0" cx="175" cy="151" r="1.0" />
        <circle class="st0" cx="175" cy="157.8" r="1.0" />
        <circle class="st0" cx="175" cy="164.6" r="1.0" />
        <circle class="st0" cx="175" cy="171.3" r="1.0" />
        <circle class="st0" cx="175" cy="178.1" r="1.0" />
        <circle class="st0" cx="175" cy="184.9" r="1.0" />
        <circle class="st0" cx="175" cy="191.7" r="1.0" />
        <circle class="st0" cx="175" cy="198.5" r="1.0" />
        <circle class="st0" cx="175" cy="205.3" r="1.0" />
        <circle class="st0" cx="175" cy="212" r="1.0" />
        <circle class="st0" cx="175" cy="218.8" r="1.0" />
        <circle class="st0" cx="175" cy="225.6" r="1.0" />
        <circle class="st0" cx="175" cy="232.4" r="1.0" />
        <circle class="st0" cx="175" cy="239.2" r="1.0" />
        <circle class="st0" cx="175" cy="246" r="1.0" />
        <circle class="st0" cx="175" cy="252.7" r="1.0" />
        <circle class="st0" cx="168.2" cy="49.3" r="1.0" />
        <circle class="st0" cx="168.2" cy="56" r="1.0" />
        <circle class="st0" cx="168.2" cy="69.6" r="1.0" />
        <circle class="st0" cx="168.2" cy="83.2" r="1.0" />
        <circle class="st0" cx="168.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="168.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="168.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="168.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="168.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="168.2" cy="130.7" r="1.0" />
        <circle class="st0" cx="168.2" cy="137.4" r="1.0" />
        <circle class="st0" cx="168.2" cy="144.2" r="1.0" />
        <circle class="st0" cx="168.2" cy="151" r="1.0" />
        <circle class="st0" cx="168.2" cy="157.8" r="1.0" />
        <circle class="st0" cx="168.2" cy="164.6" r="1.0" />
        <circle class="st0" cx="168.2" cy="171.3" r="1.0" />
        <circle class="st0" cx="168.2" cy="178.1" r="1.0" />
        <circle class="st0" cx="168.2" cy="184.9" r="1.0" />
        <circle class="st0" cx="168.2" cy="191.7" r="1.0" />
        <circle class="st0" cx="168.2" cy="198.5" r="1.0" />
        <circle class="st0" cx="168.2" cy="205.3" r="1.0" />
        <circle class="st0" cx="168.2" cy="212" r="1.0" />
        <circle class="st0" cx="168.2" cy="218.8" r="1.0" />
        <circle class="st0" cx="168.2" cy="225.6" r="1.0" />
        <circle class="st0" cx="168.2" cy="232.4" r="1.0" />
        <circle class="st0" cx="168.2" cy="239.2" r="1.0" />
        <circle class="st0" cx="168.2" cy="246" r="1.0" />
        <circle class="st0" cx="161.5" cy="56" r="1.0" />
        <circle class="st0" cx="161.5" cy="62.8" r="1.0" />
        <circle class="st0" cx="161.5" cy="69.6" r="1.0" />
        <circle class="st0" cx="161.5" cy="83.2" r="1.0" />
        <circle class="st0" cx="161.5" cy="90" r="1.0" />
        <circle class="st0" cx="161.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="161.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="161.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="161.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="161.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="161.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="161.5" cy="137.4" r="1.0" />
        <circle class="st0" cx="161.5" cy="144.2" r="1.0" />
        <circle class="st0" cx="161.5" cy="151" r="1.0" />
        <circle class="st0" cx="161.5" cy="157.8" r="1.0" />
        <circle class="st0" cx="161.5" cy="164.6" r="1.0" />
        <circle class="st0" cx="161.5" cy="171.3" r="1.0" />
        <circle class="st0" cx="161.5" cy="178.1" r="1.0" />
        <circle class="st0" cx="161.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="161.5" cy="191.7" r="1.0" />
        <circle class="st0" cx="161.5" cy="198.5" r="1.0" />
        <circle class="st0" cx="161.5" cy="205.3" r="1.0" />
        <circle class="st0" cx="161.5" cy="212" r="1.0" />
        <circle class="st0" cx="161.5" cy="218.8" r="1.0" />
        <circle class="st0" cx="161.5" cy="225.6" r="1.0" />
        <circle class="st0" cx="161.5" cy="232.4" r="1.0" />
        <circle class="st0" cx="161.5" cy="239.2" r="1.0" />
        <circle class="st0" cx="161.5" cy="246" r="1.0" />
        <circle class="st0" cx="154.7" cy="69.6" r="1.0" />
        <circle class="st0" cx="154.7" cy="83.2" r="1.0" />
        <circle class="st0" cx="154.7" cy="90" r="1.0" />
        <circle class="st0" cx="154.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="154.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="154.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="154.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="154.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="154.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="154.7" cy="137.4" r="1.0" />
        <circle class="st0" cx="154.7" cy="144.2" r="1.0" />
        <circle class="st0" cx="154.7" cy="151" r="1.0" />
        <circle class="st0" cx="154.7" cy="157.8" r="1.0" />
        <circle class="st0" cx="154.7" cy="164.6" r="1.0" />
        <circle class="st0" cx="154.7" cy="171.3" r="1.0" />
        <circle class="st0" cx="154.7" cy="178.1" r="1.0" />
        <circle class="st0" cx="154.7" cy="184.9" r="1.0" />
        <circle class="st0" cx="154.7" cy="191.7" r="1.0" />
        <circle class="st0" cx="154.7" cy="198.5" r="1.0" />
        <circle class="st0" cx="154.7" cy="205.3" r="1.0" />
        <circle class="st0" cx="154.7" cy="212" r="1.0" />
        <circle class="st0" cx="154.7" cy="218.8" r="1.0" />
        <circle class="st0" cx="154.7" cy="225.6" r="1.0" />
        <circle class="st0" cx="154.7" cy="232.4" r="1.0" />
        <circle class="st0" cx="147.9" cy="56" r="1.0" />
        <circle class="st0" cx="147.9" cy="62.8" r="1.0" />
        <circle class="st0" cx="147.9" cy="69.6" r="1.0" />
        <circle class="st0" cx="147.9" cy="90" r="1.0" />
        <circle class="st0" cx="147.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="147.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="147.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="147.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="147.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="147.9" cy="137.4" r="1.0" />
        <circle class="st0" cx="147.9" cy="144.2" r="1.0" />
        <circle class="st0" cx="147.9" cy="151" r="1.0" />
        <circle class="st0" cx="147.9" cy="157.8" r="1.0" />
        <circle class="st0" cx="147.9" cy="164.6" r="1.0" />
        <circle class="st0" cx="147.9" cy="171.3" r="1.0" />
        <circle class="st0" cx="147.9" cy="178.1" r="1.0" />
        <circle class="st1" cx="147.9" cy="184.9" r="1.0" />
        <circle class="st0" cx="147.9" cy="191.7" r="1.0" />
        <circle class="st0" cx="147.9" cy="198.5" r="1.0" />
        <circle class="st0" cx="147.9" cy="205.3" r="1.0" />
        <circle class="st0" cx="147.9" cy="212" r="1.0" />
        <circle class="st0" cx="147.9" cy="218.8" r="1.0" />
        <circle class="st0" cx="147.9" cy="225.6" r="1.0" />
        <circle class="st0" cx="147.9" cy="232.4" r="1.0" />
        <circle class="st0" cx="141.1" cy="62.8" r="1.0" />
        <circle class="st0" cx="141.1" cy="69.6" r="1.0" />
        <circle class="st0" cx="141.1" cy="76.4" r="1.0" />
        <circle class="st0" cx="141.1" cy="90" r="1.0" />
        <circle class="st0" cx="141.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="141.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="141.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="141.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="141.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="141.1" cy="137.4" r="1.0" />
        <circle class="st0" cx="141.1" cy="144.2" r="1.0" />
        <circle class="st0" cx="141.1" cy="151" r="1.0" />
        <circle class="st0" cx="141.1" cy="157.8" r="1.0" />
        <circle class="st0" cx="141.1" cy="164.6" r="1.0" />
        <circle class="st0" cx="141.1" cy="171.3" r="1.0" />
        <circle class="st0" cx="141.1" cy="178.1" r="1.0" />
        <circle class="st0" cx="141.1" cy="184.9" r="1.0" />
        <circle class="st0" cx="141.1" cy="191.7" r="1.0" />
        <circle class="st0" cx="141.1" cy="198.5" r="1.0" />
        <circle class="st0" cx="141.1" cy="205.3" r="1.0" />
        <circle class="st0" cx="141.1" cy="212" r="1.0" />
        <circle class="st0" cx="141.1" cy="218.8" r="1.0" />
        <circle class="st0" cx="141.1" cy="225.6" r="1.0" />
        <circle class="st0" cx="134.3" cy="62.8" r="1.0" />
        <circle class="st0" cx="134.3" cy="69.6" r="1.0" />
        <circle class="st0" cx="134.3" cy="83.2" r="1.0" />
        <circle class="st0" cx="134.3" cy="90" r="1.0" />
        <circle class="st0" cx="134.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="134.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="134.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="134.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="134.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="134.3" cy="130.7" r="1.0" />
        <circle class="st0" cx="134.3" cy="137.4" r="1.0" />
        <circle class="st0" cx="134.3" cy="144.2" r="1.0" />
        <circle class="st0" cx="134.3" cy="151" r="1.0" />
        <circle class="st0" cx="134.3" cy="157.8" r="1.0" />
        <circle class="st0" cx="134.3" cy="164.6" r="1.0" />
        <circle class="st0" cx="134.3" cy="171.3" r="1.0" />
        <circle class="st0" cx="134.3" cy="178.1" r="1.0" />
        <circle class="st0" cx="134.3" cy="184.9" r="1.0" />
        <circle class="st0" cx="134.3" cy="191.7" r="1.0" />
        <circle class="st0" cx="134.3" cy="198.5" r="1.0" />
        <circle class="st0" cx="134.3" cy="205.3" r="1.0" />
        <circle class="st0" cx="134.3" cy="212" r="1.0" />
        <circle class="st0" cx="127.5" cy="62.8" r="1.0" />
        <circle class="st0" cx="127.5" cy="69.6" r="1.0" />
        <circle class="st0" cx="127.5" cy="83.2" r="1.0" />
        <circle class="st0" cx="127.5" cy="90" r="1.0" />
        <circle class="st0" cx="127.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="127.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="127.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="127.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="127.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="127.5" cy="137.4" r="1.0" />
        <circle class="st0" cx="127.5" cy="144.2" r="1.0" />
        <circle class="st1" cx="127.5" cy="151" r="1.0" />
        <circle class="st0" cx="127.5" cy="157.8" r="1.0" />
        <circle class="st0" cx="127.5" cy="164.6" r="1.0" />
        <circle class="st0" cx="127.5" cy="171.3" r="1.0" />
        <circle class="st0" cx="127.5" cy="178.1" r="1.0" />
        <circle class="st0" cx="127.5" cy="184.9" r="1.0" />
        <circle class="st0" cx="127.5" cy="191.7" r="1.0" />
        <circle class="st0" cx="127.5" cy="198.5" r="1.0" />
        <circle class="st0" cx="127.5" cy="205.3" r="1.0" />
        <circle class="st0" cx="120.8" cy="69.6" r="1.0" />
        <circle class="st0" cx="120.8" cy="76.4" r="1.0" />
        <circle class="st0" cx="120.8" cy="83.2" r="1.0" />
        <circle class="st0" cx="120.8" cy="90" r="1.0" />
        <circle class="st0" cx="120.8" cy="96.7" r="1.0" />
        <circle class="st0" cx="120.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="120.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="120.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="120.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="120.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="120.8" cy="137.4" r="1.0" />
        <circle class="st0" cx="120.8" cy="144.2" r="1.0" />
        <circle class="st0" cx="120.8" cy="151" r="1.0" />
        <circle class="st0" cx="120.8" cy="157.8" r="1.0" />
        <circle class="st0" cx="120.8" cy="164.6" r="1.0" />
        <circle class="st0" cx="120.8" cy="171.3" r="1.0" />
        <circle class="st0" cx="120.8" cy="178.1" r="1.0" />
        <circle class="st0" cx="120.8" cy="184.9" r="1.0" />
        <circle class="st0" cx="120.8" cy="191.7" r="1.0" />
        <circle class="st0" cx="120.8" cy="198.5" r="1.0" />
        <circle class="st0" cx="114" cy="83.2" r="1.0" />
        <circle class="st0" cx="114" cy="90" r="1.0" />
        <circle class="st0" cx="114" cy="96.7" r="1.0" />
        <circle class="st0" cx="114" cy="103.5" r="1.0" />
        <circle class="st0" cx="114" cy="110.3" r="1.0" />
        <circle class="st0" cx="114" cy="117.1" r="1.0" />
        <circle class="st0" cx="114" cy="123.9" r="1.0" />
        <circle class="st0" cx="114" cy="130.7" r="1.0" />
        <circle class="st0" cx="114" cy="137.4" r="1.0" />
        <circle class="st0" cx="114" cy="144.2" r="1.0" />
        <circle class="st0" cx="114" cy="151" r="1.0" />
        <circle class="st0" cx="114" cy="157.8" r="1.0" />
        <circle class="st0" cx="114" cy="164.6" r="1.0" />
        <circle class="st0" cx="107.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="107.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="107.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="107.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="107.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="107.2" cy="130.7" r="1.0" />
        <circle class="st0" cx="107.2" cy="137.4" r="1.0" />
        <circle class="st0" cx="107.2" cy="144.2" r="1.0" />
        <circle class="st0" cx="107.2" cy="151" r="1.0" />
        <circle class="st0" cx="107.2" cy="157.8" r="1.0" />
        <circle class="st0" cx="107.2" cy="164.6" r="1.0" />
        <circle class="st0" cx="100.4" cy="96.7" r="1.0" />
        <circle class="st0" cx="100.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="100.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="100.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="100.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="100.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="100.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="100.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="100.4" cy="151" r="1.0" />
        <circle class="st0" cx="93.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="93.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="93.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="93.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="93.6" cy="130.7" r="1.0" />
        <circle class="st0" cx="93.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="93.6" cy="144.2" r="1.0" />
        <circle class="st0" cx="93.6" cy="151" r="1.0" />
        <circle class="st0" cx="86.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="86.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="86.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="86.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="86.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="86.9" cy="137.4" r="1.0" />
        <circle class="st0" cx="80.1" cy="96.7" r="1.0" />
        <circle class="st0" cx="80.1" cy="103.5" r="1.0" />
        <circle class="st0" cx="80.1" cy="110.3" r="1.0" />
        <circle class="st0" cx="80.1" cy="117.1" r="1.0" />
        <circle class="st0" cx="80.1" cy="123.9" r="1.0" />
        <circle class="st0" cx="80.1" cy="130.7" r="1.0" />
        <circle class="st0" cx="73.3" cy="96.7" r="1.0" />
        <circle class="st0" cx="73.3" cy="103.5" r="1.0" />
        <circle class="st0" cx="73.3" cy="110.3" r="1.0" />
        <circle class="st0" cx="73.3" cy="117.1" r="1.0" />
        <circle class="st0" cx="73.3" cy="123.9" r="1.0" />
        <circle class="st0" cx="73.3" cy="130.7" r="1.0" />
        <circle class="st0" cx="66.5" cy="96.7" r="1.0" />
        <circle class="st0" cx="66.5" cy="103.5" r="1.0" />
        <circle class="st0" cx="66.5" cy="110.3" r="1.0" />
        <circle class="st0" cx="66.5" cy="117.1" r="1.0" />
        <circle class="st0" cx="66.5" cy="123.9" r="1.0" />
        <circle class="st0" cx="66.5" cy="130.7" r="1.0" />
        <circle class="st0" cx="59.7" cy="96.7" r="1.0" />
        <circle class="st0" cx="59.7" cy="103.5" r="1.0" />
        <circle class="st0" cx="59.7" cy="110.3" r="1.0" />
        <circle class="st0" cx="59.7" cy="117.1" r="1.0" />
        <circle class="st0" cx="59.7" cy="123.9" r="1.0" />
        <circle class="st0" cx="59.7" cy="130.7" r="1.0" />
        <circle class="st0" cx="52.9" cy="96.7" r="1.0" />
        <circle class="st0" cx="52.9" cy="103.5" r="1.0" />
        <circle class="st0" cx="52.9" cy="110.3" r="1.0" />
        <circle class="st0" cx="52.9" cy="117.1" r="1.0" />
        <circle class="st0" cx="52.9" cy="123.9" r="1.0" />
        <circle class="st0" cx="52.9" cy="130.7" r="1.0" />
        <circle class="st0" cx="52.9" cy="137.4" r="1.0" />
        <circle class="st0" cx="46.2" cy="90" r="1.0" />
        <circle class="st0" cx="46.2" cy="96.7" r="1.0" />
        <circle class="st0" cx="46.2" cy="103.5" r="1.0" />
        <circle class="st0" cx="46.2" cy="110.3" r="1.0" />
        <circle class="st0" cx="46.2" cy="117.1" r="1.0" />
        <circle class="st0" cx="46.2" cy="123.9" r="1.0" />
        <circle class="st0" cx="46.2" cy="130.7" r="1.0" />
        <circle class="st0" cx="46.2" cy="137.4" r="1.0" />
        <circle class="st1" cx="46.2" cy="144.2" r="1.0" />
        <circle class="st0" cx="39.4" cy="90" r="1.0" />
        <circle class="st0" cx="39.4" cy="96.7" r="1.0" />
        <circle class="st0" cx="39.4" cy="103.5" r="1.0" />
        <circle class="st0" cx="39.4" cy="110.3" r="1.0" />
        <circle class="st0" cx="39.4" cy="117.1" r="1.0" />
        <circle class="st0" cx="39.4" cy="123.9" r="1.0" />
        <circle class="st0" cx="39.4" cy="130.7" r="1.0" />
        <circle class="st0" cx="39.4" cy="137.4" r="1.0" />
        <circle class="st0" cx="39.4" cy="144.2" r="1.0" />
        <circle class="st0" cx="32.6" cy="96.7" r="1.0" />
        <circle class="st0" cx="32.6" cy="103.5" r="1.0" />
        <circle class="st0" cx="32.6" cy="110.3" r="1.0" />
        <circle class="st0" cx="32.6" cy="117.1" r="1.0" />
        <circle class="st0" cx="32.6" cy="123.9" r="1.0" />
        <circle class="st0" cx="32.6" cy="130.7" r="1.0" />
        <circle class="st0" cx="32.6" cy="137.4" r="1.0" />
        <circle class="st0" cx="32.6" cy="144.2" r="1.0" />
        <circle class="st0" cx="32.6" cy="151" r="1.0" />
        <circle class="st0" cx="25.8" cy="103.5" r="1.0" />
        <circle class="st0" cx="25.8" cy="110.3" r="1.0" />
        <circle class="st0" cx="25.8" cy="117.1" r="1.0" />
        <circle class="st0" cx="25.8" cy="123.9" r="1.0" />
        <circle class="st0" cx="25.8" cy="130.7" r="1.0" />
        <circle class="st0" cx="25.8" cy="151" r="1.0" />
        <circle class="st0" cx="19" cy="103.5" r="1.0" />
        <circle class="st0" cx="19" cy="110.3" r="1.0" />
        <circle class="st0" cx="19" cy="117.1" r="1.0" />
        <circle class="st0" cx="19" cy="151" r="1.0" />
        <circle class="st0" cx="19" cy="157.8" r="1.0" />
      </svg>
</body>
<script>
    // setRandomClass();
// setInterval(function () {
//   setRandomClass();
// }, 2000); // number of milliseconds (2000 = 2 seconds)

// function setRandomClass() {
//   var ul = $("svg");
//   var items = ul.find("circle");
//   var number = items.length;
//   var random = 10;
//   items.removeClass("banaan");
//   items.eq(random).addClass("banaan");

//   // Increase the radius of the selected circle
//   items.eq(random).attr("r", "10"); // Update the "r" attribute value to increase the radius
// }
const circles = document.querySelectorAll(".pin");
let x;
function setRandom() {
  let random = Math.round(Math.random() * 24);
  circles[random].classList.toggle("banaan");
  circles[random].setAttribute("r", "5");
}
setInterval(function () {
  setRandom();
}, 1000);
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const one = document.querySelectorAll(".one");
const two = document.querySelectorAll(".two");
let showDiv1 = true;
div1.style.opacity = "0";
div2.style.opacity = "1";
div2.style.filter = "blur(0px)";
for (let i = 0; i < one.length; i++) {
  one[i].style.opacity = "0";
}
for (let i = 0; i < two.length; i++) {
  two[i].style.opacity = "1";
}
setInterval(() => {
  if (showDiv1) {
    div1.style.opacity = "0";
    div2.style.opacity = "1";
    for (let i = 0; i < one.length; i++) {
      one[i].style.opacity = "0";
    }
    for (let i = 0; i < two.length; i++) {
      two[i].style.opacity = "1";
    }

    div2.style.filter = "blur(0px)";
  } else {
    div1.style.opacity = "1";
    div1.style.filter = "blur(0px)";
    div2.style.opacity = "0";
    for (let i = 0; i < one.length; i++) {
      one[i].style.opacity = "1";
    }
    for (let i = 0; i < two.length; i++) {
      two[i].style.opacity = "0";
    }
  }

  showDiv1 = !showDiv1;
}, 6000);

// const india = document.querySelector(".india");
// const ind = document.getElementById("ind");
// const sa = document.getElementById("sa");
// const sa = document.getElementById("bra");
// ind.addEventListener("mouseover", function () {
//   ind.style.fill = "orange";
//   india.style.color = "orange";
// });
// ind.addEventListener("mouseout", function () {
//   ind.style.fill = "rgb(248,209,76)";
//   india.style.color = "#aeaeae";
// });
const countries = document.querySelectorAll(".pin");

countries.forEach((country) => {
  country.addEventListener("mouseover", () => {
    const countryCode = country.getAttribute("data-country");
    document.getElementById(countryCode).style.color = "orange";
    country.style.fill = "orange";
  });
  country.addEventListener("mouseout", () => {
    const countryCode = country.getAttribute("data-country");
    country.style.fill = "rgb(248,209,76)";
    document.getElementById(countryCode).style.color = "white";
  });
});

</script>
</html>`

const WorldMap = () => {
  return (
    <div>
        <iframe srcDoc={ref} title='WorldMap' width={window.innerWidth - 3} height={window.innerHeight - 7}></iframe>
    </div>
  )
}

export default WorldMap