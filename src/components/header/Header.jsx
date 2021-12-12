import "./header.css";

export default function Header() {
  let user=window.localStorage.getItem('user');
  user=JSON.parse(user);
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">{user.name}</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
    </div>
  );
}
