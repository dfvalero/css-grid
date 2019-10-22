import './index.scss';

const content = `
    <div id="eight">
        <div class="container">
            <div class="box a">A</div>
            <div class="box b">B</div>
            <div class="box c">C</div>
            <div class="box d">D</div>
            <div class="box e">E</div>
            <div class="box f">F</div>
            <div class="box g">G</div>
            <div class="box h">H</div>
            <div class="box i">I</div>
            <div class="box j">J</div>
            <div class="box k">K</div>
            <div class="box l">L</div>
            <div class="box m">M</div>
            <div class="box n">N</div>
            <div class="box o">O</div>
            <div class="box p">P</div>
            <div class="box q">Q</div>
            <div class="box r">R</div>
            <div class="box s">S</div>
            <div class="box t">T</div>
            <div class="box u">U</div>
            <div class="box v">V</div>
            <div class="box w">W</div>
            <div class="box x">X</div>
            <div class="box y">Y</div>
            <div class="box z">Z</div>
        </div>
    </div>
`;

export const executor = () => {
    const gridContainer = document.querySelector('#eight .container');
    console.log('Grid Template Columns');
    console.log(getComputedStyle(gridContainer).gridTemplateColumns)
};

export default content;