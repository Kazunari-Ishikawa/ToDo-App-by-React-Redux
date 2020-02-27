import React from 'react';

class Title extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: ['There is always light behind the clouds.',
        'Change before you have to.',
        'If you can dream it, you can do it.',
        'Love the life you live. Live the life you love.',
        'Without haste, but without rest.',
        'Stay hungry. Stay foolish.',
        'Failure is inevitable. Success is elusive.',
        'I’m happy to be alive, I’m happy to be who I am.',
        'Genius is 1 percent inspiration and 99 percent perspiration.',
        'As you think, so shall you become.'
      ],
      author: ['Louisa May Alcott',
        'Jack Welch',
        'Walt Disney',
        'Bob Marley',
        'Johann Wolfgang von Goethe',
        'Steve Jobs',
        'Steven Spielberg',
        'Michael Jackson',
        'Thomas Edison',
        'Bruce Lee']
    };
  }
  randomMsg() {
    const random = Math.floor(Math.random() * 10);
    return [
      { msg: this.state.messages[random], auth: this.state.author[random] }
    ];
  }
  render() {
    const subText = this.randomMsg();
    return (
      <div className="c-title">
        <h1 className="c-title__main">TODO LIST</h1>
        <h2 className="c-title__sub">{subText[0].msg}</h2>
        <h5 className="c-title__author">- {subText[0].auth} -</h5>
      </div>
    );
  }
}

export default Title;
