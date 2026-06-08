import { Component, signal } from '@angular/core';
import { Track } from './models/track';
import { TrackList } from './track-list/track-list';

@Component({
  selector: 'app-root',
  imports: [TrackList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected tracks = signal<Track[]>([
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      genre: 'Synth-pop',
      durationSeconds: 200,
      year: 2019,
      rating: 9,
      favorite: true,
      coverUrl: 'https://picsum.photos/seed/1/300',
    },
    {
      id: 2,
      title: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      genre: 'Pop',
      durationSeconds: 167,
      year: 2022,
      rating: 8,
      favorite: false,
      coverUrl: 'https://picsum.photos/seed/2/300',
    },
    // … autres morceaux
  ]);
}
