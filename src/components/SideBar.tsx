import { GenreResponseProps } from "../@types/GenreResponseProps";
import { Button } from "./Button";

interface sidebarProps{
  handleClickButton:(id:number)=>void;
  selectedGenreId: number;
  genres: GenreResponseProps[]
}
export function SideBar({handleClickButton, selectedGenreId, genres}:sidebarProps) {

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

    </nav>
  )
}