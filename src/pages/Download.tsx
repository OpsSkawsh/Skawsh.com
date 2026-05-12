const Download = () => {
  const ua = navigator.userAgent || navigator.vendor;

  if (/iPad|iPhone|iPod/.test(ua)) {
    window.location.href = "https://apps.apple.com/in/app/skawsh/id6757456162";
  } else if (/android/i.test(ua)) {
    window.location.href = "https://play.google.com/store/apps/details?id=com.skawsh.user";
  } else {
    window.location.href = "https://www.skawsh.com";
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Arial" }}>
      <h2>Redirecting you to download Skawsh...</h2>
      <p>If not redirected, <a href="https://www.skawsh.com">click here</a></p>
    </div>
  );
};

export default Download;