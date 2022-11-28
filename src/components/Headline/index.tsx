import classes from "src/components/Headline/Headline.module.css";

type Mainpage = {
  title: string;
  page: string;
  number?: number;
  array?: number[];
  //   foo?: string;
  //   bar?: number;
  bool?: boolean;
  children: any;
  onClick?: any;
};

// interface Myobj = {
//     foo: string;
//     bar: number;
// }

export function Headline(props: Mainpage) {
  console.log(props);
  return (
    <div>
      <h1 className={classes.title}>{props.title}</h1>
      <p className={classes.description}>
        Get started by editing {props.children}
      </p>

      {/* <button onClick={props.onClick}>ボタン</button> */}
    </div>
  );
}
