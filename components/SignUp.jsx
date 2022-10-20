export default function SignUp() {
  return (
    <>
      <section className="card bg-primary-cyan text-base-100">
        <h1 className="text-[18px] -mt-[3px] font-bold">Monthly Subscription</h1>
        <p className="flex items-center gap-3 mt-[9.75px]">
          <span className="text-[32px] font-bold">&#36;29</span>
          <span className="text-base-100/50">per month</span>
        </p>
        <p className="text-base-100/75 leading-[22px]">Full access for less than &#36;1 a day</p>
        <button className="w-full pt-[13px] pb-[11px] font-bold text-white/75 rounded-md mt-[28px] text-clenter bg-primary-yellow">Sign Up</button>
      </section>
    </>
  );
}
