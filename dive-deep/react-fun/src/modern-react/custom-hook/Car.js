import useWindowWidth from "../hooks/useWindowWidth";

export default function Car() {
    const onSmallScreen = useWindowWidth(768);

    return (
        <div className={onSmallScreen ? "small" : "large"}>
            <h1>This is truck component</h1>
        </div>
    );
}
