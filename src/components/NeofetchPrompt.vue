<script setup lang="ts">
function yearsAndMonthsSince(date: Date): { years: number; months: number } {
  const today = new Date();
  var years = today.getFullYear() - date.getFullYear();
  var months = today.getMonth() - date.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months };
}

// I'm sure you could find my real birthday easily, but let's pretend that's not the case
const { years, months } = yearsAndMonthsSince(new Date("2001-01-01"));
</script>

<template>
  <div class="input">
    <span class="prompt-green">❯</span>
    <span class="green">neofetch</span>
  </div>
  <div class="output">
    <div class="left">
      <!-- .\ascii-image-converter ein.jpg -d 60,20 -b --threshold 100 -->
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⠿⢛⣻⣭⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⡒⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣶⡶⣖⣦⣷⣶⣶⣿⣿⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣷⣄⡑⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡀⠠⠄⠐⣒⣀⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣷⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡻⠿⢋⣴⣿⣧⣀⠤⣤⣴⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣽⣷⣿⣿⣿⣿⣿⣿⣿⣶⣭⣙⣛⠿⢿⡿⠿⣛⡛⠉⣉⣁⣠⣤⣤⣶⣾⢙⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠴⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣾⠏⣥⣾⣿⣿⣿⣿⣿⣿⡿⢃⣾⣿⣿⣿⣿⡿⣱⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣎⣀⣀⡀⠈⠛⠻⣿⠿⢛⣫⣷⣿⣿⣿⣿⣿⣿⣿⣧⢰⣿⣿⣿⣿⣿⣿⠿⣋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⢻⡻⡍⠿⢿⣷⣤⣴⣫⣾⡿⠛⠛⠻⣿⣿⣿⣿⣿⣿⣿⢶⣟⣛⠿⢛⣩⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⣎⣻⣶⣿⣷⣿⣿⣿⡿⣿⣿⣷⣦⡄⠀⠹⣿⣿⣿⣿⡏⠈⢋⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠟⠛⠋⠉⠁</div>
      <div>⠀⢀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⠠⠀⠀⡆⢠⣵⣿⣿⣿⣿⣿⣿⣿⣿⠸⣌⠻⢿⣷⣤⣀⣨⣿⣿⠏⠀⢀⣸⣿⣿⣿⣿⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠀⣄⣀⣻⢪⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠻⠻⣿⣿⣿⣵⡾⠟⠛⠁⣠⣴⣾⣿⣿⡿⠟⢁⣀⠀⠀⢀⡀⣀⡠⠀⣀⣤⣴⣶⣿⣿⣿</div>
      <div>⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢁⣠⡘⡃⠟⠛⠿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠉⠉⣀⣠⣴⣶⣾⣿⣿⡿⠋⣁⣴⣾⣿⣿⠿⠟⠛⣋⣥⣶⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⢀⠀⠀⠐⣄⠀⢀⢤⢄⣠⢅⡼⣻⣾⣷⣄⡀⢀⣠⠟⢛⣋⣥⣶⡀⠀⢀⣴⣿⣿⣿⣿⣿⣿⣿⡿⠿⠛⡡⠐⣙⣋⣭⣥⣴⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⡥⣨⣂⡆⣀⣬⣮⣄⣠⡾⣿⣿⣿⣿⣿⣿⣧⣻⢿⣿⣿⣿⡟⣀⣤⣤⣈⠛⠛⠛⠛⠛⢋⣉⣤⣤⣶⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⣥⣝⡷⢶⣿⣷⣿⠉⠀⠉⠉⢛⣻⢿⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⣉⣵⣿⣾⣿⣿⣿⣷⣦⣄⠘⠻⣿⣿⣶⣭⣛⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣛</div>
      <div>⡛⠿⣯⣿⣿⣿⣿⣿⣿⣿⣷⣦⣌⡈⠉⠛⠿⣿⣷⣯⣟⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢟⣛⣭⣵⣶⣿⣿⣿</div>
      <div>⣦⣹⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣈⠙⠿⠿⠛⠉⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⣛⣫⣭⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
      <div>⣿⣿⣿⣿⣿⣏⣙⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣦⣴⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣋⣩⣽⣶⣜⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</div>
    </div>
    <div class="right">
      <div>
        <span class="green">kenneth-ho</span>
      </div>
      <div>----------</div>
      <div>
        <span class="green">Age:</span>
        {{ years }} years, {{ months }} months
      </div>
      <div>&nbsp;</div>
      <div>
        <span class="green">Discord: </span>
        kenesu_h
      </div>
      <div>
        <span class="green">Email: </span>
        <a href="mailto:officialkennyho@gmail.com">officialkennyho@gmail.com</a>
      </div>
      <div>
        <span class="green">GitHub: </span>
        <a href="https://github.com/kenesu-h">kenesu-h</a>
      </div>
      <div>
        <span class="green">LinkedIn: </span>
        <a href="https://www.linkedin.com/in/kenneth-ho-2001/"
          >kenneth-ho-2001</a
        >
      </div>
      <div>&nbsp;</div>
      <div>
        <span class="green">College: </span>
        Northeastern University
      </div>
      <div>
        <span class="green">Class of: </span>
        2023
      </div>
      <div>&nbsp;</div>
      <div>
        <span class="green">Languages:</span>
        TypeScript, Python, Rust, Java, C/C++
      </div>
      <div>
        <span class="green">Technologies:</span>
        Git, Linux, React, Angular, Docker
      </div>
      <div>&nbsp;</div>
      <div>
        <span class="green">PFP:</span>
        From
        <a href="https://en.wikipedia.org/wiki/Cowboy_Bebop">Cowboy Bebop</a>
        (Sunrise, 1997)
      </div>
      <div>
        Generated using
        <a href="https://github.com/TheZoraiz/ascii-image-converter">
          TheZoraiz/ascii-image-converter
        </a>
      </div>
      <div>&nbsp;</div>
      <div>
        <span class="green">Background:</span>
        From
        <a href="https://en.wikipedia.org/wiki/Persona_5">Persona 5</a>
        (Atlus, 2016)
      </div>
      <div>&nbsp;</div>
      <div class="palette">
        <span class="black">███</span>
        <span class="red">███</span>
        <span class="green">███</span>
        <span class="yellow">███</span>
        <span class="blue">███</span>
        <span class="purple">███</span>
        <span class="cyan">███</span>
        <span class="white">███</span>
      </div>
      <div class="palette">
        <span class="bright-black">███</span>
        <span class="red">███</span>
        <span class="green">███</span>
        <span class="yellow">███</span>
        <span class="blue">███</span>
        <span class="purple">███</span>
        <span class="cyan">███</span>
        <span class="bright-white">███</span>
      </div>
    </div>
  </div>
</template>

<style>
.input {
  display: flex;
  flex-direction: row;
  gap: 1ch;
}

.output {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 3ch;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>
