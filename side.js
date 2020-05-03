document.write(`
<nav id="sidebar">
        <div class="sidebar-header">
            <h3>IGAP</h3>
        </div>

        <ul class="list-unstyled components">
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                    <a href="start.html">Getting started</a>
                </li>
            <li>
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Figures</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li><a href="chr.html?chr=1">Chromosome 1</a></li>
                    <li><a href="chr.html?chr=2">Chromosome 2</a></li>
                    <li><a href="chr.html?chr=3">Chromosome 3</a></li>
                    <li><a href="chr.html?chr=4">Chromosome 4</a></li>
                    <li><a href="chr.html?chr=5">Chromosome 5</a></li>
                    <li><a href="chr.html?chr=6">Chromosome 6</a></li>
                    <li><a href="chr.html?chr=7">Chromosome 7</a></li>
                    <li><a href="chr.html?chr=8">Chromosome 8</a></li>
                    <li><a href="chr.html?chr=9">Chromosome 9</a></li>
                    <li><a href="chr.html?chr=10">Chromosome 10</a></li>
                    <li><a href="chr.html?chr=11">Chromosome 11</a></li>
                    <li><a href="chr.html?chr=12">Chromosome 12</a></li>
                    <li><a href="chr.html?chr=13">Chromosome 13</a></li>
                    <li><a href="chr.html?chr=14">Chromosome 14</a></li>
                    <li><a href="chr.html?chr=15">Chromosome 15</a></li>
                    <li><a href="chr.html?chr=16">Chromosome 16</a></li>
                    <li><a href="chr.html?chr=17">Chromosome 17</a></li>
                    <li><a href="chr.html?chr=18">Chromosome 18</a></li>
                    <li><a href="chr.html?chr=19">Chromosome 19</a></li>
                    <li><a href="chr.html?chr=20">Chromosome 20</a></li>
                    <li><a href="chr.html?chr=21">Chromosome 21</a></li>
                    <li><a href="chr.html?chr=22">Chromosome 22</a></li>
                    <li><a href="chr.html?chr=x">Chromosome x</a></li>
                    <li><a href="other.html">Other</a></li>
                </ul>
            </li>
            <li>
                    <a href="#dataSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Data</a>
                    <ul class="collapse list-unstyled" id="dataSubmenu">
                            <li><a href="download.html">nTBA data</a></li>
                            <li><a href="download_other.html">Other data</a></li>
                        </ul>
            </li>
        </ul>

        <ul class="list-unstyled CTAs">
            <li>
                <a href="files/igap.zip" class="download">Download package</a>
                <a href="files/extra.zip" class="download">Download sample</a>
            </li>
        </ul>
    </nav>
    `)