import DanceEventPreviewCard from '../dance-event-preview-card';

type Props = {
  title: string;
};

export default function PreviewSection({ title }: Props) {
  return (
    <>
      <div>{title}</div>
      <DanceEventPreviewCard />
    </>
  );
}
