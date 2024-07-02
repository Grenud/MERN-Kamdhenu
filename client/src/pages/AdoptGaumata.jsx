import Button from "../component/Button";
import CowCard from "../component/CowCard";
function AdoptGaumata() {
  return (
    <section className="min-h-screen main-container my-5">
      <div className="w-full flex items-center justify-end">
      <Button btnText={"ALREADY ADOPTED"} className="w-64 text-sm font-semibold bg-accent1 hover:bg-accent2 duration-300" />
      </div>
      <h1 className="text-3xl font-bold tracking-wide text-center my-4">Adopt Gaumatas</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        <CowCard/>
        <CowCard/>
        <CowCard/>
        <CowCard/>
        <CowCard/>
        <CowCard/>
        <CowCard/>
        <CowCard/>
        <CowCard/>
        <CowCard/>
      </section>
    </section>
  );
}

export default AdoptGaumata;
