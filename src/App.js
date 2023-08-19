import './App.css';

function App() {
  return (
    <>
    <header>

    <div className='head1'>
    <h1>Multimax calculator</h1>
    </div>
    <div className='head2' id='head2'>
      <ul>
        <h2>Type I</h2>
        <li><a href="/">Addition</a></li>
        <li><a href="/">Subtraction</a></li>
        <li><a href="/">Multiplication</a></li>
        <li><a href="/">Divide</a></li>
        <li><a href="/">Root</a></li>
      </ul>
      <ul>
        <h2>Type II</h2>
        <li><a href="/">Addition</a></li>
        <li><a href="/">Subtraction</a></li>
        <li><a href="/">Multiplication</a></li>
        <li><a href="/">Divide</a></li>
        <li><a href="/">Root</a></li>
      </ul>
      <ul>
        <h2>Type III</h2>
        <li><a href="/">Addition</a></li>
        <li><a href="/">Subtraction</a></li>
        <li><a href="/">Multiplication</a></li>
        <li><a href="/">Divide</a></li>
        <li><a href="/">Root</a></li>
      </ul>
    </div>
    </header>
    <main>
      <section id='add'>
        <div>
          <h2>ADDITION</h2>
        </div>
        <div>
          <div id='add-cal'>
            <input type="number" name="" id="" />
            <h2>+</h2>
            <input type="number" name="" id="" />
            <h2>ANS</h2>
            <h2>--/--</h2>
          </div>
        </div>
      </section>
      <section id='sub'>

      </section>
      <section id='mul'>

      </section>
      <section id='div'>

      </section>
      <section id='root'>

      </section>
    </main>
    </>
  );
}

export default App;
