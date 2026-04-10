import {
  IconEmail,
  IconGithub,
  IconLinkedIn,
  IconLocation,
  IconPhone,
  IconUser,
} from "../icons";

export default function CVHeader({ data, photo, onPhotoUpload }) {
  return (
    <div className="flex items-center justify-between px-10 py-9 border-b-2 border-[#1a56a0] gap-6">
      <div className="flex-1">
        <h1 className="text-[28px] font-bold text-[#1a56a0] leading-tight mb-1 tracking-tight">
          {data.name}
        </h1>
        <p className="text-[13.5px] text-gray-500 font-medium mb-5 tracking-wide">
          {data.title}
        </p>

        <div className="flex flex-col gap-1.25">
          <ContactRow icon={<IconLocation />}>{data.location}</ContactRow>
          <ContactRow icon={<IconPhone />}>{data.phone}</ContactRow>
          <ContactRow icon={<IconEmail />}>{data.email}</ContactRow>

          <div className="flex items-center gap-5 mt-0.5">
            <SocialLink
              href={data.linkedin.url}
              icon={<IconLinkedIn />}
              label={data.linkedin.label}
            />
            <SocialLink
              href={data.github.url}
              icon={<IconGithub />}
              label={data.github.label}
            />
          </div>
        </div>
      </div>

      <PhotoUpload photo={photo} onUpload={onPhotoUpload} />
    </div>
  );
}

const ContactRow = ({ icon, children }) => (
  <div className="flex items-center gap-2 text-[12.5px] text-gray-500">
    <span className="text-[#1a56a0]">{icon}</span>
    {children}
  </div>
);

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="flex items-center gap-1.5 text-[12.5px] text-[#1a56a0] hover:underline"
  >
    {icon}
    {label}
  </a>
);

const PhotoUpload = ({ photo, onUpload }) => (
  <div className="shrink-0">
    <label className="cursor-pointer block">
      <div className="w-27 h-27 rounded-full border-[2.5px] border-[#1a56a0] overflow-hidden bg-blue-50 flex items-center justify-center hover:opacity-90 transition-opacity">
        {photo ? (
          <img
            src={photo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-1 text-center">
            <IconUser />
            <span className="text-[10px] text-blue-400 leading-tight px-2">
              Click to upload
            </span>
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        onChange={onUpload}
      />
    </label>
  </div>
);
