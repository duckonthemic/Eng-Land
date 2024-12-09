"use client";

import { useState, useEffect } from "react";
import vocabularyFlashcards from "../../../data/flashcards";
import Flashcard from "../../../components/Flashcard";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(isSameOrAfter);

export default function VocabularyFlashcardsPage() {
  const [flashcards, setFlashcards] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionFlashcards, setSessionFlashcards] = useState([]);
  const [newFlashcard, setNewFlashcard] = useState({
    question: "",
    answer: "",
    tags: "",
    image: "",
    audio: "",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("vocabularyFlashcards"));
    setFlashcards(stored && stored.length ? stored : vocabularyFlashcards);
  }, []);

  useEffect(() => {
    localStorage.setItem("vocabularyFlashcards", JSON.stringify(flashcards));
  }, [flashcards]);

  const filteredFlashcards = flashcards.filter((card) => {
    const searchMatch =
      card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const tagMatch = selectedTag ? card.tags.includes(selectedTag) : true;
    return searchMatch && tagMatch;
  });

  const tags = [...new Set(flashcards.flatMap((card) => card.tags))];

  const handleMark = (id, mark) => {
    const today = dayjs().format("YYYY-MM-DD");
    setFlashcards((prev) =>
      prev.map((card) =>
        card.id === id
          ? {
              ...card,
              status: mark,
              lastReviewed: today,
              reviewInterval:
                mark === "known" ? (card.reviewInterval || 1) * 2 : 1,
            }
          : card
      )
    );
  };

  const selectFlashcards = () => {
    const today = dayjs();
    const toReview = flashcards.filter((card) => {
      if (card.lastReviewed) {
        const nextReview = dayjs(card.lastReviewed).add(
          card.reviewInterval,
          "day"
        );
        return today.isSameOrAfter(nextReview);
      }
      return true;
    });
    setSessionFlashcards(toReview.length ? toReview : flashcards);
    setCurrentIndex(0);
  };

  const startSession = () => {
    selectFlashcards();
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % sessionFlashcards.length);
  };

  const shuffleCards = () => {
    const shuffled = [...filteredFlashcards].sort(() => Math.random() - 0.5);
    setSessionFlashcards(shuffled);
    setCurrentIndex(0);
  };

  const addFlashcard = (e) => {
    e.preventDefault();
    const { question, answer, tags, image, audio } = newFlashcard;
    if (!question || !answer) {
      alert("Please enter both question and answer.");
      return;
    }
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    const newCard = {
      id: flashcards.length ? flashcards[flashcards.length - 1].id + 1 : 1,
      question,
      answer,
      tags: tagsArray,
      level: "Beginner",
      status: "unknown",
      lastReviewed: null,
      reviewInterval: 1,
      image,
      audio,
    };
    setFlashcards([...flashcards, newCard]);
    setNewFlashcard({
      question: "",
      answer: "",
      tags: "",
      image: "",
      audio: "",
    });
  };

  const deleteFlashcard = (id) => {
    if (confirm("Are you sure you want to delete this flashcard?")) {
      setFlashcards((prev) => prev.filter((card) => card.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-primary-light-green text-center">
          Vocabulary Flashcards
        </h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search flashcards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
          />
          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="w-full md:w-1/4 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
          >
            <option value="">All Tags</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          {(searchTerm || selectedTag) && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("");
              }}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Clear
            </button>
          )}
        </div>

        {/* Add New Flashcard */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Add New Flashcard
          </h2>
          <form
            onSubmit={addFlashcard}
            className="flex flex-col items-center space-y-4"
          >
            {["question", "answer", "tags", "image", "audio"].map((field) => (
              <input
                key={field}
                type="text"
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={newFlashcard[field]}
                onChange={(e) =>
                  setNewFlashcard({ ...newFlashcard, [field]: e.target.value })
                }
                className="w-full md:w-1/2 border-2 border-primary-light-green rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-dark-green"
              />
            ))}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Add Flashcard
            </button>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={startSession}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            Start Study Session
          </button>
          <button
            onClick={shuffleCards}
            className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
          >
            Shuffle Flashcards
          </button>
        </div>

        {/* Study Session */}
        {sessionFlashcards.length > 0 ? (
          <div className="flex flex-col items-center">
            <Flashcard
              question={sessionFlashcards[currentIndex].question}
              answer={sessionFlashcards[currentIndex].answer}
              status={sessionFlashcards[currentIndex].status}
              onMark={(mark) =>
                handleMark(sessionFlashcards[currentIndex].id, mark)
              }
              type={
                sessionFlashcards[currentIndex].tags.includes("Translation")
                  ? "translation"
                  : "definition"
              }
              image={sessionFlashcards[currentIndex].image}
              audio={sessionFlashcards[currentIndex].audio}
            />
            <button
              onClick={nextCard}
              className="mt-4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
            >
              Next Flashcard
            </button>
          </div>
        ) : /* Display Filtered Flashcards */
        filteredFlashcards.length ? (
          <div className="flex flex-wrap justify-center gap-8">
            {filteredFlashcards.map((card) => (
              <div key={card.id} className="relative">
                <Flashcard
                  question={card.question}
                  answer={card.answer}
                  status={card.status}
                  onMark={(mark) => handleMark(card.id, mark)}
                  type={
                    card.tags.includes("Translation")
                      ? "translation"
                      : "definition"
                  }
                  image={card.image}
                  audio={card.audio}
                />
                <button
                  onClick={() => deleteFlashcard(card.id)}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-neutral-dark">
            No matching flashcards found.
          </p>
        )}

        {/* Statistics */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Study Statistics</h2>
          <p className="text-lg">
            Total Flashcards:{" "}
            <span className="font-bold">{flashcards.length}</span>
          </p>
          <p className="text-lg">
            Known:{" "}
            <span className="font-bold text-green-600">
              {flashcards.filter((card) => card.status === "known").length}
            </span>
          </p>
          <p className="text-lg">
            Unknown:{" "}
            <span className="font-bold text-red-600">
              {flashcards.filter((card) => card.status === "unknown").length}
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
