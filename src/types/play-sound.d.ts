declare module 'play-sound' {
  interface Player {
    play: (filename: string, callback?: (err?: Error) => void) => void;
  }

  function player(opts?: object): Player;
  export default player;
} 
