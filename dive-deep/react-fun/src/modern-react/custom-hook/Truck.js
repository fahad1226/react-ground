import useWindowWidth from "../hooks/useWindowWidth";

export default function Truck() {
    const onSmallScreen = useWindowWidth(600);

    return (
        <div className={onSmallScreen ? "small" : "large"}>
            <h1>This is truck component</h1>
        </div>
    );
}
